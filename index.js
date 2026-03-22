const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from your Railway app!");
  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
