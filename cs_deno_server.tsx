<<<<<<< HEAD
// CS Open Source License. If you copy two techniques or more from this program into one of your programs within two years after april 22 2023, you should pay Creative Sources.

// Clean, structured, functional programming please.
// Add Types where clarifying. It's TypeScript.

import { h, Fragment, renderSSR } from "./deps.ts";
import { Bson } from "https://deno.land/x/mongo@v0.31.2/mod.ts";
=======
// CS Open Source License. https://

// Clean, structured, functional programming please.
// Add Types where clarifying. It's TypeScript.

import { h, renderSSR } from "./deps.ts";
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02

import { css } from "./main_functions/client_css.ts";

<<<<<<< HEAD
import Visitor from "./types/Visitor.ts";

=======
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02
// Create Store or State Machine

// Set up server
const server = Deno.listen({
  port: 60999,
  // certFile: "localhost.crt",
  // keyFile: "localhost.key",
  // alpnProtocols: ["h2", "http/1.1"],
});
console.log(
  `HTTP webserver running. Access it at localhost:60999`,
);
for await (const conn of server) serveHttp(conn);

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const reqPath = new URLPattern(requestEvent.request.url).pathname;
    console.log("reqPath: ", reqPath);

    // ROUTING
    if (reqPath == "/artwork/cs.png") {
      console.log("Artwork...");
      const logo = await Deno.readFile("./artwork/cs.png");
      requestEvent.respondWith(new Response(logo, { headers: {
        "content-type": "image/png",}
      }),);
    } else if (reqPath == "/favicon.ico") {
      console.log("Favicon...");
      const logo = await Deno.readFile("./artwork/favicon.ico");
      requestEvent.respondWith(new Response(logo, { headers: {
        "content-type": "image/x-icon",}
      }),);
    } else if (reqPath !== "/") {
      console.log("Redirect...");
      requestEvent.respondWith(
        Response.redirect("http://localhost:60999/", 307),
        );
    } else {
      console.log("Homepage...");
<<<<<<< HEAD
      // Scan visitor
      const visitorID = secCookie.value;
      const client: Record<string, unknown> = { ...conn.remoteAddr };
      const ip = client.hostname + ":" + client.port;
      const browser = requestEvent.request.headers.get("user-agent");
      const time = Date.now();
      const visitor: Visitor = { _id: new Bson.ObjectId(), visitorID, ip, browser, time }
=======
>>>>>>> 249fa1163d622d17091a2437bca28cae8ae87a02

      // Set headers
      const headers = new Headers();
      headers.set("status", "200");
      headers.set("content-type", "text/html; charset=utf-8");

      // Construct and set homepage
      const Homepage = () => {
        return (
          <div id="homepage"></div>
        );
      };
      const homepage = renderSSR(<Homepage />);
      const bundle = await Deno.readTextFile("./islands/bundle.js");

      const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CS Deno Server</title>
          <style>${css}</style>
        </head>
        <body>
          ${homepage}
          <script>${bundle}</script>
        </body>
      </html>`;

      requestEvent.respondWith(
        new Response(html, { headers }),
      );
    }
  }
}