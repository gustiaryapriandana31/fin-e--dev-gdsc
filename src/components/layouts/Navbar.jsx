import { useState } from "react";
import { navBarData } from "../../staticData/navbarData";
import logo from "../../assets/logo.png";
import { CgMenuHotdog } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
      <nav className="md:flex md:flex-row md:justify-center">
        <div className="md:flex md:justify-end md:items-center md:rounded-full md:px-10 md:w-3/4 bg-transparent shadow-md md:mb-7">
          <div className="py-3 px-8">
            <img
              src={logo}
              alt="Logo Image"
              className="inline-block md:w-32 md:h-16 w-20 h-12"
            />
          </div>

          {showMenu ? (
            <IoCloseSharp
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-4xl absolute right-8 top-5"
            />
          ) : (
            <CgMenuHotdog
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-4xl absolute right-8 top-5"
            />
          )}
          <ul
            className={`z-10 md:flex md:flex-row md:justify-end md:gap-12 md:items-center text-slate-800 font-semibold absolute md:static md:bg-transparent bg-amber-200 rounded-tl-3xl rounded-bl-[3rem] md:w-full w-1/2 right-0 transition-all duration-400 ease-in ${
              showMenu
                ? "top-16 opacity-100"
                : "top-[-500px] md:opacity-100 opacity-0"
            }`}
          >
            {navBarData.map((data) => (
              <Link to={data.link} key={data.id} className="block text-center rounded-xl p-3 md:my-0 hover:bg-orange-500 md:hover:scale-110">
                  {data.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;