import Form from "../fragments/Form";

const FormReviewer =  () => {
    return (
      <div id="review" className="bg-gradient-to-r from-orange-500/90 to-yellow-500/80 md:pt-10 pt-7 relative md:h-auto">
        <div className="absolute top-12 md:left-56 left-60 shadow-md shadow-white rounded-full bg-orange-400 md:w-36 md:h-36 w-28 h-28 opacity-50"></div>
        <div className="absolute md:bottom-28 bottom-24 md:right-60 right-5 rounded-full shadow-xl shadow-amber-400 bg-orange-400 md:w-32 md:h-32 w-24 h-24 opacity-80"></div>
        <h1 className="text-center md:text-4xl text-3xl mt-12 md:mt-0 mb-8 font-bold font-poppins text-white">
          Spill Your Review
        </h1>
        <Form />
        <svg className="mt-20 md:mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="rgb(217 119 6)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,117.3C672,117,768,171,864,165.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    );
}

export default FormReviewer;