import donutDarkChoco from "../../assets/donutDarkChoco.png";
import { CompositionData } from "../../staticData/Composition";

const Composition = () => {
    return (
      <section
        id="watch_features"
        className="font-roboto bg-slate-950 h-screen flex flex-row justify-center items-center relative"
      >
        <div className="p-2">
          <img
            src={donutDarkChoco}
            alt="Donut Dark Choco"
            className="-ml-7 md:block hidden"
          />
          {/* <img src="img/mobile-watch.png" alt="Watch Image" className="md:hidden block" /> */}
          <button className="absolute bottom-32 left-[14%] md:static md:mt-3 block mx-auto text-base font-bold bg-slate-500 shadow-inner shadow-slate-200 py-2 px-5 text-center rounded-lg cursor-default">
            Click numbers for explanation
          </button>
        </div>

        {CompositionData.map((data) => (
          <div key={data.number}>
            <h2
              className="number text-center absolute top-76 left-26 bg-white font-bold text-lg font-poppins w-6 h-6 opacity-95 cursor-pointer hover:scale-125 animate-pulse rounded-full md:top-48 md:left-[40%]"
              data-target={`DESC${data.number}`}>
              {data.number}
            </h2>
            <article
              className="hidden article p-4 h-40 absolute top-[34%] z-20 left-0 bg-slate-800 text-white border-2 rounded-lg md:rounded-br-3xl md:w-1/4 md:bg-white md:text-black md:top-12 md:left-48"
              data-desc={`DESC${data.number}`}>
              <h1 className="close cursor-pointer float-right bg-slate-500 w-6 h-6 text-center rounded-full">
                X
              </h1>
              <h4 className="text-center font-bold text-lg mb-2">
                {data.title}
              </h4>
              <p className="text-sm">{data.article}</p>
            </article>
          </div>
        ))}
      </section>
    );
};

export default Composition;
