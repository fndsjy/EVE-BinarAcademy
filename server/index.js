const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2022;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs")

const getLandingPages = (req, res) => {
  res.render("index");
}

const getCars = (req, res) => {
  res.render("getCars");
}

const unknown = (req, res) => {
  res.status(404);
  res.send(`<h1 style="text-align: center; align-content: center; margin: 25% auto;"> 404 </<h1>`)
}

app.get("/", getLandingPages);
app.get("/cars", getCars);
app.use("/", unknown);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});