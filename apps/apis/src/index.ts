import chainRouter from "./routers/chains";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Moralis from "moralis";

dotenv.config();
const { PORT = 8005, MORALIS_API_KEY = "" } = process.env;

const app: Express = express();

app.use("/chain", chainRouter);
app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Express + TypeScript Server</h1>");
});

(async function () {
  await Moralis.start({ apiKey: MORALIS_API_KEY });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})();
