import donutCoffee from '../../assets/donutCoffee.png';
import donutOreo from '../../assets/donutOreo.png';

const About = () => {
    return (
      <section className="flex flex-row justify-center bg-yellow-700">
        <div className="bg-amber-200 px-20 py-10 text-center font-roboto basis-1/2 rounded-tr-full rounded-br-full">
          <h1 className="mt-20 font-bold text-2xl text-slate-800">About</h1>
          <p className="w-3/4 my-10 text-lg text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            nemo, reiciendis facilis sapiente dolore omnis tenetur reprehenderit
            laudantium tempore sequi. Asperiores fugiat ut maxime aliquid
            reprehenderit unde necessitatarum, aspernatur nulla minima commodi.
            Maiores repellat impedit sint quasi saepe odio, exercitationem
            consequatur repudiandae. Totam libero accusamus molestias quisquam
            impedit natus odit saepe amet cumque omnis hic, quam nulla
            doloremque!
          </p>
        </div>
        <div className="basis-1/2 rounded-tl-full rounded-bl-full relative">
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
}

export default About;