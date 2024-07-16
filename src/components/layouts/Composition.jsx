import { useState } from "react";
import donutDarkChoco from "../../assets/donutDarkChoco.png";
import donutPinky from "../../assets/donutPinky.png";
import { DonutsData } from "../../staticData/Composition";
import Ripple from "../fragments/Ripple";
import Article from "../fragments/Article";
import Button from "../elements/Button";

const Composition = () => {

    const initialState = Array(DonutsData.length).fill(false);
    const [article, setArticle] = useState(initialState);

    const handleToggleArticle = (index) => {
      const updatedArticle = [...article];
      updatedArticle[index] = !updatedArticle[index];
      setArticle(updatedArticle);
    };

    const handleDisplayAll = () => {
      setArticle((prevState) =>
        prevState.every((value) => value === true)
          ? [...prevState].fill(false)
          : [...prevState].fill(true)
      );
    };

    return (
      <section className="font-roboto bg-amber-950 h-screen flex flex-row justify-center items-center relative">
          <img src={donutDarkChoco} alt="Donut Dark Choco" className="z-10 inline-block" />
          <img src={donutPinky} alt="Donut Dark Choco" className="z-10 inline-block" />
          <Ripple />

          {/* Choco Donuts Composition */}
          <div key={DonutsData[0].number} className="z-10 bg-red-400">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:bottom-44 md:left-36 ${article[0] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(0)}>
              {DonutsData[0].number}
            </h2>
            <Article article={article[0]} addedClassName="md:bottom-16 md:left-38 md:rounded-tl-3xl" handleDisplayArticle={() => handleToggleArticle(0)} dataDonut={DonutsData[0]}/>
          </div>
          <div key={DonutsData[1].number} className="z-10">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:top-52 md:left-36 ${article[1] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(1)}>
              {DonutsData[1].number}
            </h2>
            <Article article={article[1]} addedClassName="md:top-16 md:left-36 md:rounded-bl-3xl " handleDisplayArticle={() => handleToggleArticle(1)} dataDonut={DonutsData[1]}/>
          </div>
          <div key={DonutsData[2].number} className="z-10">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:top-72 md:left-[30%] ${article[2] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(2)}>
              {DonutsData[2].number}
            </h2>
            <Article article={article[2]} addedClassName="md:top-56 md:right-[48%] md:rounded-bl-3xl md:rounded-tl-3xl" handleDisplayArticle={() => handleToggleArticle(2)} dataDonut={DonutsData[2]}/>
          </div>

          {/* Strawberry Donuts Composition */}
           <div key={DonutsData[3].number} className="z-10 bg-red-400">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:bottom-36 md:right-36 ${article[3] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(3)}>
              {DonutsData[3].number}
            </h2>
            <Article article={article[3]} addedClassName="md:bottom-8 md:right-44 md:rounded-tr-3xl" handleDisplayArticle={() => handleToggleArticle(3)} dataDonut={DonutsData[3]}/>
          </div>
          <div key={DonutsData[4].number} className="z-10">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:top-56 md:right-[30%] ${article[4] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(4)}>
              {DonutsData[4].number}
            </h2>
            <Article article={article[4]} addedClassName="md:top-20 md:right-[32%] md:rounded-br-3xl" handleDisplayArticle={() => handleToggleArticle(4)} dataDonut={DonutsData[4]}/>
          </div>
          <div key={DonutsData[5].number} className="z-10">
            <h2 className={`text-center absolute top-76 left-26 font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-ripple rounded-full md:top-32 md:right-[22%] ${article[5] ? "bg-orange-500 text-white" : "bg-slate-300"}`} onClick={() => handleToggleArticle(5)}>
              {DonutsData[5].number}
            </h2>
            <Article article={article[5]} addedClassName="md:top-8 md:right-7 md:rounded-tl-3xl md:rounded-bl-3xl " handleDisplayArticle={() => handleToggleArticle(5)} dataDonut={DonutsData[5]}/>
          </div>

          <Button addedClassname="absolute bottom-10 left-[45%] bg-orange-500 rounded-xl font-poppins" onClick={handleDisplayAll}>Display All</Button>
      </section>

    );
};

export default Composition;
