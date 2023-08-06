import tokensService from "../services/tokens.service";
import express, { Request, Response } from "express";

const tokensRouter = express.Router();

tokensRouter.get("/pairToken", async (req: Request, res: Response) => {
  const { addressOne, addressTwo } = req.query as {
    addressOne: string;
    addressTwo: string;
  };

  try {
    const data = await tokensService.getPairtokensPrice(addressOne, addressTwo);
    res.status(200);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res.json({ error: error.message });
  }
});

tokensRouter.get("/", async (_req: Request, res: Response) => {
  res.json({ message: "ok" });
});

export default tokensRouter;
