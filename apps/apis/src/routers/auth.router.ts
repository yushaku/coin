import express, { Request, Response } from "express";

const authRouter = express.Router();

authRouter.get("/", async (_req: Request, res: Response) => {
  try {
    res.status(200);
    res.json();
  } catch (error: any) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

export default authRouter;
