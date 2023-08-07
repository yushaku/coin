import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HomePage, NFTs, SwapPage, TokenPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />

      <article className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/tokens" element={<TokenPage />} />
          <Route path="/nfts" element={<NFTs />} />
        </Routes>
      </article>

      <Footer />
    </div>
  );
}

export default App;
