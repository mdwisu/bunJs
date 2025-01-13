Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.searchParams.get("name")) {
      return new Response(`Hello, ${url.searchParams.get("name")}!`);
    } else {
      return new Response("Hello World!");
    }
  },
});
