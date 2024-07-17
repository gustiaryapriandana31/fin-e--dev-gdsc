import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="relative bg-amber-600 text-white">
        <div className="grid lg:grid-cols-4 gap-7 sm:grid-cols-1 p-20">
            <Link to="/" className="block">
                <img
                src={logo}
                alt="Logo Image"
                className="w-24 h-12"
                />
            </Link>
            <div>
                <p className="text-xl font-bold font-roboto text-slate-800 py-2 uppercase">
                    Link
                </p>
                <Link to="/" className="block my-4 list-none">Home</Link>
                <Link to="/" className="block my-4 list-none">About</Link>
                <Link to="/donuts" className="block my-4 list-none">Donuts</Link>
                <Link to="/" className="block my-4 list-none">Reviews</Link>
            </div>
            <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold font-roboto text-slate-800 py-2 uppercase">Contact</h2>
                <p className="text-[16px] my-4">dodonuts31@gmail.com</p>
                <Link to="https://api.whatsapp.com/send/?phone=6282281963857&text&type=phone_number&app_absent=0" className="text-[16px] my-4">0822 8196 3857</Link>
            </div>
        </div>
        <div className="text-center text-sm py-4 bg-amber-700 border-t-2 border-amber-500 md:text-lg">
            <p className="md:w-full w-3/4 mx-auto">&copy; 2024 DODONUTS. Arya Priandana . All rights reserved.</p>
        </div>
    </footer>
    );
}

export default Footer;