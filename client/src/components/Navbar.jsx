import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-2 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full fixed md:justify-center justify-between items-center p-4">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#868686] rounded-[100px]">
        <img src={logo} alt="logo" className="w-30 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Toko", "Pertukaran", "Guide", "Tabungan"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#cfcfcf] py-4 px-9 hover:bg-[#ffffff]">
          Masuk
        </li>
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={20} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={20} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 flex -top-0 -right-2 p-3 w-470vw] md:show list-none
            flex flex-col bold-start items-end rounded-md text-black animate-slide-in"
          >
            <li className="flex flex-col justiy-center items-center gap-3"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Toko", "Pertukaran", "Guide", "Tabungan"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
