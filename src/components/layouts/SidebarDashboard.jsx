import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { LuDonut } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { CgMenuHotdog } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const SidebarDashboard = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <aside
            className={`h-auto md:w-1/5 md:px-12 transition-all duration-400 ease-in ${
            showMenu
                ? "w-16 bg-amber-500 h-screen px-5 py-20"
                : "w-[40%] bg-amber-500 h-screen px-3 py-20"
            }`}
        >
            {showMenu ? (
                <CgMenuHotdog
                    onClick={() => setShowMenu(!showMenu)}
                    className="md:hidden text-4xl text-white absolute left-3 top-5"
                />
                ) : (
                <IoCloseSharp
                    onClick={() => setShowMenu(!showMenu)}
                    className="md:hidden text-4xl text-white absolute left-5 top-5"
                />
            )}
            <Link to="/" className="block">
            <img
                src={logo}
                alt="Logo Image"
                className={`md:w-32 md:h-16 ${
                showMenu ? "hidden" : "inline-block w-40 h-12"
                }`}
            />
            </Link>
            <nav className="flex flex-col md:gap-5 gap-3 mt-12">
                <Link
                    to="create"
                    className={`p-2 font-semibold font-poppins md:text-lg text-sm text-white hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                    showMenu ? "hidden" : "block"
                    }`}
                >
                    <GoStarFill className="inline mr-1 md:mr-3 md:text-xl text-sm" />
                    Form
                </Link>
                <Link to="create">
                    <GoStarFill
                    className={`inline mr-1 text-2xl text-white md:hidden hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                        showMenu ? "block" : "hidden"
                    }`}
                    />
                </Link>

                <Link
                    to="read"
                    className={`p-2 font-semibold font-poppins md:text-lg text-sm text-white hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                    showMenu ? "hidden" : "block"
                    }`}
                >
                    <LuDonut className="inline mr-1 md:mr-3 md:text-xl text-sm" />
                    Donuts
                </Link>
                <Link to="read">
                    <LuDonut
                    className={`inline mr-1 text-2xl text-white md:hidden hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                        showMenu ? "block" : "hidden"
                    }`}
                    />
                </Link>

                <Link
                    to="read-review"
                    className={`p-2 font-semibold font-poppins md:text-lg text-sm text-white hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                    showMenu ? "hidden" : "block"
                    }`}
                >
                    <GrTransaction className="inline mr-1 md:mr-3 md:text-xl text-sm" />
                    Reviews
                </Link>
                <Link to="read">
                    <GrTransaction
                    className={`inline mr-1 text-2xl text-white md:hidden hover:bg-white hover:text-orange-500 rounded-full hover:scale-110 ${
                        showMenu ? "block" : "hidden"
                    }`}
                    />
                </Link>

        
            </nav>
        </aside>
    );
}

export default SidebarDashboard;