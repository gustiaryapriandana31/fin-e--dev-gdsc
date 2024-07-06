import { navBarData } from "../../staticData/navbarData";

export const Navbar = () => {
    return (
        <nav className="flex flex-row justify-center">
            <div className="flex justify-around items-center rounded-full p-2 w-screen">
                <div className="flex gap-4 items-center bg-white text-black p-2 rounded-full">LOGO</div>
                <div className="">
                    <ul className="flex flex-row gap-12 items-center text-slate-800 font-semibold">
                        {
                            navBarData.map((data) => (
                            <li key={data.id}>{data.title}</li> 
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    
    )
}