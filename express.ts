import express from "express";

const app = express();

app.get("/", (req, res) => {
  const name = req.query["name"] || "World";
  res.send(`Hello ${name}!`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
