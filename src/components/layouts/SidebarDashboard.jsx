import { Link } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { LuDonut } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";

const SidebarDashboard = () => {
    return (
        <aside className="w-1/5 bg-slate-800 h-screen px-10 py-20">
            <Link to="/" className="text-2xl font-bold text-white font-poppins">D<LuDonut className="inline" />D<FaRegEye className="inline" />NATS</Link>
            <nav className="flex flex-col gap-7 mt-12" >
                <Link to="create" className="font-semibold font-poppins text-md text-white"><GoStarFill className="inline mr-3 text-xl" />Add Donuts</Link>
                <Link to="read" className="font-semibold font-poppins text-md text-white"><LuDonut className="inline mr-3 text-xl" />Donuts</Link>
                <Link to="readreview" className="font-semibold font-poppins text-md text-white"><GrTransaction className="inline mr-3 text-xl" />Reviews</Link>
            </nav>
        </aside>
    );
}

export default SidebarDashboard;