import { discordServer } from "./discord.server";
import authRouter from "./routers/auth.router";
import nftRouter from "./routers/nft.router";
import tokensRouter from "./routers/tokens.router";
import chainRouter from "./routers/wallet.router";
import cors from "cors";
import { Webhook } from "discord-webhook-node";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Moralis from "moralis";

dotenv.config();
const {
  DISCORD_WEB_HOOK = "",
  TOKEN = "",
  PORT = 8005,
  MORALIS_API_KEY = "",
} = process.env;

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

app.use("/tokens", tokensRouter);
app.use("/wallet", chainRouter);
app.use("/auth", authRouter);
app.use("/nft", nftRouter);
app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

const hook = new Webhook(DISCORD_WEB_HOOK);
hook.setUsername("Yushaku's bot");
hook.send("Hello there!");

Moralis.start({ apiKey: MORALIS_API_KEY }).then(() => {
  app.listen(PORT, () => {
    // discordServer(TOKEN);
    console.log(`app listening on port ${PORT} and connect to blockchain`);
  });
});
