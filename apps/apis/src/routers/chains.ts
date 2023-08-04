import chainService from "../services/chain";
import express, { Request, Response } from "express";

const chainRouter = express.Router();

chainRouter.get("/demo/:address", async (req: Request, res: Response) => {
  const { address } = req.params;

  try {
    const data = await chainService.getDemoData(address);
    res.status(200);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

chainRouter.get("/", async (_req: Request, res: Response) => {
  res.json({ message: "ok" });
});

export default chainRouter;
