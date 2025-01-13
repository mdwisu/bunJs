import figlet from "figlet";

import { hello } from "./hello";

hello();
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.log(Bun.version);
    const body = figlet.textSync("Bun!");

    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
