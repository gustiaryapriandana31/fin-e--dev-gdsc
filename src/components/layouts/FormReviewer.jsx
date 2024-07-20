import Form from "../fragments/Form";
import Navbar from "./Navbar";

const FormReviewer =  () => {
    return (
      <section className="bg-gradient-to-r from-orange-500/90 to-yellow-500/80 md:pt-5">
        <Navbar />
        <div className="md:py-10 py-5 relative md:h-auto">
          <div className="absolute md:top-6 top-12 md:left-56 left-60 shadow-md shadow-white rounded-full bg-orange-400 md:w-36 md:h-36 w-28 h-28 opacity-50 animate-bounce"></div>
          <div className="absolute md:bottom-2 bottom-0 md:right-60 right-5 rounded-full shadow-xl shadow-amber-400 bg-orange-400 md:w-32 md:h-32 w-16 h-16 opacity-80 animate-pulse"></div>
          <h1 className="text-center md:text-4xl text-3xl mt-6 md:mt-0 mb-8 font-bold font-poppins text-white">
            Spill Your Review
          </h1>
          <Form />
        </div>
      </section>
    );
}

export default FormReviewer;