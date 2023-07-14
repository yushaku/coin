import { useMoralis } from "react-moralis";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  return (
    <div>
      <h1>hello world</h1>
      {isWeb3Enabled && <p>Web3 Enabled</p>}
    </div>
  );
}
