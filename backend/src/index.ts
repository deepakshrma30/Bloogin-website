import { Hono } from "hono";
import blogRoutes from "../routes/routes";

const app = new Hono();

app.route('/api/v1/user', blogRoutes);

export default app;
