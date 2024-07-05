import { navBarData } from "../../staticData/navbarData";

export const Navbar = () => {
    return (
        <div className="bg-amber-600 h-screen pt-10">
            <nav className="flex flex-row justify-center">
                <div className="flex justify-between items-center px-6 rounded-full bg-transparent p-2 w-3/4 shadow-sm shadow-white">
                    <div className="flex gap-4 items-center bg-white text-black p-2 rounded-full">LOGO</div>
                    <div className="">
                        <ul className="flex flex-row gap-12 items-center">
                            {
                                navBarData.map((data) => (
                                <li key={data.id}>{data.title}</li> 
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}