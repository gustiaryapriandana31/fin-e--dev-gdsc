import Form from "../fragments/Form";

const FormReviewer =  () => {
    return (
      <div id="review" className="bg-gradient-to-r from-orange-500/90 to-yellow-500/80 md:py-10 pt-7 relative md:h-auto h-screen">
        <div className="absolute top-10 md:left-56 left-60 shadow-md shadow-white rounded-full bg-orange-400 md:w-36 md:h-36 w-28 h-28 opacity-50"></div>
        <div className="absolute md:bottom-6 bottom-24 md:right-60 right-5 rounded-full shadow-xl shadow-amber-400 bg-orange-400 md:w-32 md:h-32 w-24 h-24 opacity-80"></div>
        <h1 className="text-center md:text-4xl text-3xl mt-12 md:mt-0 mb-4 font-bold font-poppins text-white">
          Spill Your Review
        </h1>
        <Form />
      </div>
    );
}

export default FormReviewer;