const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Route of static fille
app.use("/static", express.static(path.resolve(__dirname, "src", "frontend")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

console.log(__dirname)
console.log("test")
app.listen(port, () => console.log(`Server running...\nat http://localhost:${port}`));