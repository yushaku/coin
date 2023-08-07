import Services from "../components/Services";
import Transactions from "../components/Transactions";
import Welcome from "../components/Welcome";

export const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Services />
      <Transactions />
    </div>
  );
};
