import { donutsDataDB, donutsImgDB } from "../../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
// import { ref, deleteObject, getDownloadURL } from "firebase/storage";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ReadDonutData = () => {

  const navigatePage = useNavigate();
  const [donutsData, setDonutsData] = useState([]);
  // const [donutImgUrl, setDonutImgUrl] = useState("");

  useEffect(() => {
    const readData = async () => {
      const donutsCollection = collection(donutsDataDB, "donutsData");
      try {
        const donutsDataSnapshot = await getDocs(donutsCollection);
        // Binding the data to the state
        const allDonutsData = donutsDataSnapshot.docs.map((doc) => ({
          ...doc.data(),
          donutId: doc.id,
        }));
        setDonutsData(allDonutsData);
      } catch (error) {
        console.log("Error reading data : ", error);
      }
    };

    readData();
  }, []);

  const deleteData = async (donutId) => {
    const donutDataRef = doc(donutsDataDB, "donutsData", donutId);
    // const donutImgRef = ref(donutsImgDB, "donutImages");
    // const getUrlImage = (snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setDonutImgUrl(url);
    //   })
    // }

    // console.log(getUrlImage(donutImgRef));

    try {
      await deleteDoc(donutDataRef).then(() => {
        // Delete the file
        // deleteObject(getUrlImage(donutImgRef))
        //   .then(() => {
        //     console.log("Image Deleted Successfully");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        alert("Data deleted successfully!");
        window.location.href = "/read";
      });
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="w-4/5">
      <h1 className="text-center md:text-4xl text-3xl font-bold text-orange-600 font-serif mt-7">
        All Donuts Available
      </h1>

      <Link to="/create" className="text-center inline-block font-bold text-white mt-10 bg-orange-400 rounded-md px-4 py-2 md:mx-5 mx-2 mb-3">
        Add Data
      </Link>
      <section className="grid grid-cols-2 gap-3 mx-2 md:grid-cols-5 md:gap-0">
        {donutsData.map((donut, index) => (
          <div
            key={index}
            className="p-2 pb-0 bg-amber-300 rounded md:m-2 mb-3 relative"
          >
            <div className="pt-2 mb-4">
              <img src={donut.donutImg} alt={donut.donutName} />
            </div>

            <div className="h-full mb-10">
              <h3 className="font-semibold text-sm text-center underline">
                {donut.donutName}
              </h3>
              <p className="text-sm m-2 w-full font-normal">
                {donut.donutDesc}
              </p>
              <p className="absolute font-poppins font-semibold top-0 right-0 bg-lime-400 md:p-1 p-px rounded-tr-md rounded-bl-md text-sm">
                {donut.donutPrice}
              </p>
            </div>

            <button
              onClick={() => navigatePage("/edit/" + donut.donutId)}
              className="bg-orange-400 p-2 absolute -bottom-4 left-0 w-1/2"
            >
              <FaRegEdit className="inline text-lg text-white hover:text-orange-500" />
              
            </button>
            <button
              onClick={() => deleteData(donut.donutId)}
              className="bg-red-400 p-2 absolute -bottom-4 right-0 w-1/2"
            >
              <MdDelete className="inline text-lg text-white hover:text-red-500"/>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ReadDonutData;
