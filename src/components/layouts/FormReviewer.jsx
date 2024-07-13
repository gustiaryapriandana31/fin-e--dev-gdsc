import Form from "../fragments/Form";

const FormReviewer =  () => {
    return (
      <div className="bg-gradient-to-r from-orange-500/90 to-yellow-500/80 py-10 relative">
        <div className="absolute top-6 left-56 shadow-md shadow-white rounded-full bg-orange-400 w-36 h-36 opacity-60"></div>
        <div className="absolute bottom-6 right-60 rounded-full shadow-xl shadow-amber-400 bg-orange-400 w-32 h-32 opacity-80"></div>
        <h1 className="text-center text-4xl mb-4 font-bold font-poppins text-white">
          Spill Your Review
        </h1>
        <Form />
      </div>
    );
}

export default FormReviewer;