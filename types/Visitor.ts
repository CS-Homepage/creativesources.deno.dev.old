import { Bson } from "https://deno.land/x/mongo@v0.31.2/mod.ts";

export default interface Visitor {
    _id: Bson.ObjectId;
    visitorID: string;
    ip: string;
    browser: string | null;
    time: number;
}
