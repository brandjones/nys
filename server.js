const path = require("path");
const express = require("express");
const app = express();

const public = path.join(__dirname, "public");
const html = `${public}/index.html`;
const PORT = process.env.PORT || 3000;

app.use(express.static(public));
app.get("*", (req, res) => res.sendFile(html));
app.listen(PORT);
