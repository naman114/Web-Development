const express = require("express");
import { Request, Response } from "express";
import { store } from "./store";

const app = express();
app.use(express.json());

const PORT = 8080;

app.get("/api/hello-world", (req: Request, res: Response) => {
  res.send("Hello world! 👋");
});

app.post(
  "/api/user",
  (
    req: Request<never, never, { username: string; age: number }>,
    res: Response
  ) => {
    const user = store.createUser(req.body);

    res.json({
      ok: true,
      user,
    });
  }
);

app.get("/api/user/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const user = store.readUser(Number(id));

  if (!user) return res.status(404).json({ ok: false });

  res.json({ ok: true, user });
});

app.patch(
  "/api/user/:id",
  (
    req: Request<never, never, { username?: string; age?: number }>,
    res: Response
  ) => {
    const { id } = req.params;

    const user = store.updateUsers(Number(id), req.body);

    if (!user) return res.status(404).json({ ok: false });

    res.json({ ok: true, user });
  }
);

app.delete("/api/user/:id/", (req: Request, res: Response) => {
  const { id } = req.params;

  const user = store.deleteUsers(Number(id));

  if (!user) return res.status(404).json({ ok: false });

  res.json({ ok: true, user });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend is running on http://localhost:${PORT}/`);
});
