import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => res.send("Express + TypeScript Server !"));

app.get("/hello", (req, res) => res.send("Um novo endpoint foi adicionado :)"));

app.get("/hi", (req, res) => res.send("Hi You!"));

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
