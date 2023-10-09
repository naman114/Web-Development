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
 */
export type User = {
  id: number;
  username: string;
  age: number;
};
