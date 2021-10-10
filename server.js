const express = require("express");
const path = require("path");

const app = express();
const port = process.env.Port || 3000;

// Route of static fille
app.use("/static", express.static(path.resolve(__dirname, "src", "frontend")));
app.use("/packages", express.static(path.resolve(__dirname, "src", "Packages")));
app.use("/public", express.static(path.resolve(__dirname, "public")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`Server running...\nat http://localhost:${port}`));