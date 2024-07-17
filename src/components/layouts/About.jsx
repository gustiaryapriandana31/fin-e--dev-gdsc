"use client";

// import { cn } from "@/lib/utils";
import donutCoffee from "../../assets/donutCoffee.png";
import donutOreo from "../../assets/donutOreo.png";
// import DotPattern from "../fragments/magicUI/DotPattern";

const About = () => {
  return (
    <section id="about" className="md:flex md:flex-row md:justify-center bg-yellow-700 md:h-screen">
      <div className="md:bg-amber-200 md:px-20 px-10 md:py-24 py-12 font-roboto md:basis-1/2 rounded-tr-full rounded-br-full">
        <h1 className="mt-7 text-center font-roboto-mono font-bold text-3xl text-amber-400 md:text-orange-600">
          About Dodonats
        </h1>
        <p className="md:w-3/4 w-full my-8 text-sm md:text-lg md:text-slate-800 text-white/70 text-center md:text-justify md:leading-8 font-poppins">
          DODONATS merupakan kedai rintisan yang menjual berbagai macam donat
          dengan topping yang menggugah selera. Kami menyediakan berbagai macam
          donat yang lezat dan bergizi, dengan topping cair dan taburan di
          atasnya, membuat cita rasanya meleleh di lidah, lembut digigit. Kami
          memadukan lebih dari 10 rasa yang berbeda untuk membuat siapapun bisa
          menikmatinya.
        </p>
      </div>
      <div className="md:block hidden md:basis-1/2 rounded-tl-full rounded-bl-full relative">
        <figure>
          <div className="bg-transparent animate-spin rounded-full w-3/5 h-3/5 absolute top-44 left-40 shadow-md shadow-yellow-900"></div>
          <img
            src={donutOreo}
            alt="Donut Coffee"
            className="donut-image inline-block absolute top-40 right-1 w-3/4 opacity-90"
          />
          <img
            src={donutCoffee}
            alt="Donut Oreo"
            className="donut-image inline-block absolute bottom-20 left-20 w-3/4 opacity-90"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
