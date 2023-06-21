import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.2/mod.ts";
import { Collection } from "https://deno.land/x/mongo@v0.31.2/src/collection/collection.ts";
import Visitor from "../types/Visitor.ts";

// Connect DB
// deno-lint-ignore no-explicit-any
async function connectDB(query: any) {
  console.log("connectDB: ", query);
  const { URI } = config();
  if (!URI) throw new Error("URI not found");
  const client = new MongoClient();

  try {
    await client.connect(URI);
  } catch (err) {
    console.error("Error connecting to creativesources DB:", err);
    throw err;
  }

  const db = client.database("cs_homepage");
  const visitors = db.collection<Visitor>("visitors");

  console.log("Start Query: ", visitors);
  await query(visitors);

  // await visitors.deleteMany({ ip: { $regex: "127.0.0.1" } });
  client.close();
}

// Log visitors
export async function logVisitors() {
  console.log("logVisitors")
  async function query(visitors: Collection<Visitor>) {
    const cursor = visitors.find({},);
    await cursor.forEach((doc: Visitor) => {
      console.log(doc);  
    });
  }
  await connectDB(query);
} 

// saveVisitor(visitor)
export async function saveVisitor(visitor: Visitor): Promise<void> {
  async function query(visitors: Collection<Visitor>) {
    const insertId = await visitors.insertOne({
      _id: visitor._id,
      visitorID: visitor.visitorID,
      ip: visitor.ip,
      browser: visitor.browser,
      time: visitor.time,
    });
    console.log(
      "saveToDB:\n",
      visitor.visitorID + "\n",
      visitor.ip + "\n",
      visitor.browser + "\n",
      "insertId: ", insertId
    );
  }
  await connectDB(query);
}

// IP or cookie in DB