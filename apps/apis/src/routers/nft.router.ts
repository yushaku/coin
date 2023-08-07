import tokensService from "../services/nft.service";
import express, { Request, Response } from "express";

const nftRouter = express.Router();

nftRouter.get("/collections", async (_req: Request, res: Response) => {
  try {
    const data = await tokensService.getCollection();
    res.status(200);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res.json({ error: error.message });
  }
});

export default nftRouter;
