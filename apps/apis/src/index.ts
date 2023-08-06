import authRouter from "./routers/auth.router";
import tokensRouter from "./routers/tokens.router";
import chainRouter from "./routers/wallet.router";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Moralis from "moralis";

dotenv.config();
const { PORT = 8005, MORALIS_API_KEY = "" } = process.env;

const app: Express = express();
app.use(cors());

app.use("/tokens", tokensRouter);
app.use("/wallet", chainRouter);
app.use("/auth", authRouter);
app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

Moralis.start({ apiKey: MORALIS_API_KEY }).then(() => {
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT} and connect to blockchain`);
  });
});
