const express = require("express");
import { Request, Response } from "express";
import { store } from "./store";
import swaggerDocs from "./swagger";

const app = express();
app.use(express.json());

const PORT = 8080;

// comments in YAML format

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - username
 *         - age
 *       properties:
 *         username:
 *           type: string
 *           default: John Doe
 *         age:
 *           type: integer
 *           default: 18
 *     CreateUserResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         age:
 *           type: integer
 *     GetUserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         age:
 *           type: integer
 */

/**
 * @openapi
 * /api/hello-world:
 *  get:
 *    tags:
 *      - Hello World
 *    description: Returns a simple hello world message
 *    responses:
 *      200:
 *        description: Hello world message
 */
app.get("/api/hello-world", (req: Request, res: Response) => {
  res.send("Hello world! 👋");
});

/**
 * @openapi
 * /api/user:
 *  post:
 *    tags:
 *      - User
 *    summary: Create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserInput'
 *    responses:
 *      200:
 *       description: User created successfully
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserResponse'
 *      400:
 *       description: Bad Request
 *      409:
 *       description: Conflict  
 */
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

/**
 * @openapi
 * '/api/user/{id}':
 *   get:
 *     tags:
 *       - User
 *     summary: Get a user by id
 *     parameters:
 *     - name: id
 *       in: path
 *       description: The id of the user
 *       required: true
 *     responses:
 *       200:
 *          description: User found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/GetUserResponse'
 *       404:
 *          description: User not found
 */
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
  swaggerDocs(app, PORT);
});
