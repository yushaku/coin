import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";

async function authenticate() {
  const response = await Moralis.Auth.requestMessage({});
  console.log(response.toJSON());
}
