import "dotenv/config";
import express from "express";

const app = express();

const serverName = process.env.SERVER_NAME;
console.log(serverName);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { serverName });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
