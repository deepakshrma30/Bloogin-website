import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

const authMiddleWare = createMiddleware(async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
 
  try {
    if (!authHeader) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const token = await verify(authHeader, c.env.JWT_SECRET);
    console.log(token)
    if (!token) {
      c.status(401);
      return c.json({ error: "UNAUTHORIZED" });
    } else {
      c.set("id", token.id);
      await next();
    }
  } catch (error) {
    console.log(error);
  }
});

export default authMiddleWare;
