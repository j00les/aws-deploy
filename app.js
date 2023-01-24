require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({
    name: "coba dong",
    nyim: "coba deploy doang",
    nyam: "coba deploy hanya",
    nyim: "coba deploy aws",
  });
});

app.listen(PORT, () => {
  console.log("listening to", PORT);
});
