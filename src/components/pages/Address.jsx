import Shop from "../../assets/shop.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Address = () => {
  return (
    <>
        <section
        id="about"
        className="md:flex md:flex-row md:justify-center bg-amber-200/30 md:h-screen p-4">
            <div className="md:block md:basis-1/2 md:pb-0 pb-16 bg-amber-200 shadow-xl rounded-full relative ">
                <figure className="md:flex md:flex-row md:items-center">
                    <img
                        src={Shop}
                        alt="Shop Image"
                        className="md:mt-40 mt-20 md:ml-0 ml-10 donut-image inline-block w-3/4 opacity-90"
                    />
                    <ul className="md:-ml-20 md:mt-44 mt-10 text-center md:text-base space-y-2">
                        <li><IoIosCheckmarkCircleOutline className="inline-block text-green-600"/> Rumahnya Para Donat</li>
                        <li><IoIosCheckmarkCircleOutline className="inline-block text-green-600"/> Promo dan Diskon</li>
                        <li><IoIosCheckmarkCircleOutline className="inline-block text-green-600"/> Paket Donut Menarik</li>
                    </ul>
                </figure>
                <p className="md:ml-28 mt-10 md:text-base text-sm md:text-start text-center"><a href="https://maps.app.goo.gl/eAJzLU4YVKdeD1oG8" className="font-roboto text-red-500"><SiGooglemaps className="inline-block ml-3"/>Meranjat, Ogan Ilir, Sumatera Selatan</a></p>
            </div>
            <div className="md:ml-20 md:px-20 px-10 md:py-24 py-12 font-roboto md:basis-1/2 rounded-tr-full rounded-br-full">
                <h1 className="mt-7 font-roboto-mono font-bold md:text-3xl md:text-start text-xl text-center text-orange-600">
                    Tentang Toko Kami
                </h1>
                <p className="md:w-3/4 w-full my-8 text-sm md:text-lg md:text-slate-800 text-white/70 text-center md:leading-7 font-poppins">
                Kunjungilah toko kami untuk melihat semua beraneka ragam donat dan
                paket-paket menarik yang kami teawarkan. Kehadiranmu adalah tujuan
                kami. Salam Donat Manis.
                </p>
                <h4 className="mt-16 font-roboto-mono font-bold text-lg text-amber-400 md:text-orange-600">
                Follow Social Media Kami
                </h4>
                <section>
                    <ul className="flex flex-row justify-center mt-5 space-x-5">
                        <li>
                            <a href="https://www.facebook.com/dodonats" className="text-amber-400 hover:text-amber-600">
                                <FaFacebook className="text-2xl text-white"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dodonats" className="text-amber-400 hover:text-amber-600">
                                <FaInstagram className="text-2xl text-white"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/dodonats" className="text-amber-400 hover:text-amber-600">
                                <FaXTwitter className="text-2xl text-white"/>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="rgb(217 119 6)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,117.3C672,117,768,171,864,165.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  );
};

export default Address;
