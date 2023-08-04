import walletService from "../services/wallet.service";
import express, { Request, Response } from "express";

const walletRouter = express.Router();

walletRouter.get("/demo/:address", async (req: Request, res: Response) => {
  const { address } = req.params;

  try {
    const data = await walletService.getDemoData(address);
    res.status(200);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

walletRouter.get("/", async (_req: Request, res: Response) => {
  res.json({ message: "ok" });
});

export default walletRouter;
