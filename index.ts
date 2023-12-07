const server = Bun.serve({
  hostname: "::",
  port: process.env.PORT ?? 3000,
  fetch(request) {
    return new Response("Welcome to Busss!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
