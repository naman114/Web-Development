"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const store_1 = require("./store");
const app = express();
app.use(express.json());
const PORT = 8080;
app.get("/api/hello-world", (req, res) => {
    res.send("Hello world! 👋");
});
app.post("/api/user", (req, res) => {
    const user = store_1.store.createUser(req.body);
    res.json({
        ok: true,
        user,
    });
});
app.get("/api/user/:id", (req, res) => {
    const { id } = req.params;
    const user = store_1.store.readUser(Number(id));
    if (!user)
        return res.status(404).json({ ok: false });
    res.json({ ok: true, user });
});
app.listen(PORT, () => {
    console.log(`🚀 Backend is running on http://localhost:${PORT}/`);
});
