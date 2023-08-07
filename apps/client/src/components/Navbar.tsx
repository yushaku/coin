import { ChainIcon, ConnectKitButton } from "connectkit";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNetwork, useSwitchNetwork } from "wagmi";

const NavBarItem = ({
  title,
  classprops,
}: {
  title: string;
  classprops?: any;
}) => (
  <li className={`mx-4 cursor-pointer font-semibold ${classprops}`}>
    <Link to={title.toLowerCase()}>{title}</Link>
  </li>
);

const pages = ["Swap", "Tokens", "NFTs"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { chains, error, isLoading, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <ul className="text-white md:flex-[0.5] md:flex list-none flex-row items-center flex-initial">
        <li>
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-32 cursor-pointer" />
          </Link>
        </li>

        {pages.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>

      <ul className="text-white md:flex hidden list-none flex-row gap-4 justify-between items-center flex-initial">
        <li>
          <div className="flexCenter gap-2">
            <ChainIcon id={chain?.id ?? 1} />
            {chain?.name}
          </div>
        </li>

        <li>
          <ConnectKitButton />
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {pages.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
