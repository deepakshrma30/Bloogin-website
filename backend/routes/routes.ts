import { Hono } from "hono";
import { zValidator } from '@hono/zod-validator'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import authMiddleWare from "../middleware";
import { hashFunction } from "../CommonFunction";
import { signupinput } from "@deepaksharma248/validation";

const blogRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    id: string;
  };
}>();

blogRoutes.post("/signUp", zValidator("json",signupinput) ,async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const isExist = await prisma.user.findUnique({
      where: {
        email: body?.email,
      },
    });

    if (isExist) {
      return c.text("User already exist");
    }
    const hashPassword = await hashFunction(body?.password);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashPassword,
      },
      select: {
        email: true,
        password: true,
        id: true,
      },
    });
    const payload = {
      id: user.id,
      email: user.email,
      role: "user",
    };
    const token = await sign(payload, c.env.JWT_SECRET);

    return c.json({
      message: "Signned in",
      token: token,
      user: user,
    });
  } catch (e) {
    return c.status(403);
  }
});

blogRoutes.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const hashPassword = await hashFunction(body?.password);
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: hashPassword,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        message: "User not found",
      });
    }
    const payload = {
      id: user.id,
      email: user.email,
      role: "user",
    };
    const token = await sign(payload, c.env.JWT_SECRET);
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: token,
      },
      select: {
        id: true,
        email: true,
        token: true,
      },
    });
    return c.json({
      message: "Success",
      data: updatedUser,
    });
  } catch (error) {
    return c.status(403);
  }
});

blogRoutes.post("/blog", authMiddleWare, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  //@ts-ignore
  const id = c.get("id");
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.description,
        authorId: id,
      },
    });
    return c.json({
      data: {
        blog,
      },
    });
  } catch (error) {
    c.status(411);
    return c.json({ message: error });
  }
});

blogRoutes.put("/blog/:id", authMiddleWare, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const { id } = c.req.param();
    const blog = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        content: body.description,
      },
    });
    c.status(200);
    return c.json({
      message: "Updated Successfully",
      data: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({ message: error });
  }
  
});

blogRoutes.get("/blogs/:id", authMiddleWare, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const { id } = c.req.param();
    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });
    c.status(200);
    return c.json({ message: "Success", data: post });
  } catch (Error) {
    c.status(411);
    return c.json({ error: Error });
  }
});

blogRoutes.get("/blog/bluk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try {
    const blog = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return c.json({ data: blog });
  } catch (error) {
    return c.json({ message: error, status: "411" });
  }
});

blogRoutes.delete("/DeleteUser/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const { id } = c.req.param();
    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
      select: {
        email: true,
        id: true,
      },
    });

    c.status(200);
    return c.json({ message: "success", data: deleteUser });
  } catch (error) {
    c.status(411);
    return c.json({ message: error });
  }
});

export default blogRoutes;
