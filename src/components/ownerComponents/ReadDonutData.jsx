import { donutsDataDB, donutsImgDB } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL } from "firebase/storage";

const ReadDonutData = () => {
  const navigatePage = useNavigate();
  const [donutsData, setDonutsData] = useState([]);
  const [donutImgUrl, setDonutImgUrl] = useState("");

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
    <div>
      <h1 className="text-center text-3xl font-bold text-orange-600 font-serif my-10">
        All Review From Customer
      </h1>

      <Link
        to="/create"
        className="inline-block mt-10 bg-blue-400 rounded-md p-2"
      >
        Add Data
      </Link>
      <ul>
        {donutsData.map((donut, index) => (
          <div key={index} className="flex flex-col gap-4 px-4 my-5">
            <li className="border p-2 bg-slate-200 rounded m-2">
              <img
                src={donut.donutImg}
                alt="Donut Image"
                className="w-40 h-60 m-auto"
              />
              <h3>{donut.donutName}</h3>
              <p>{donut.donutDesc}</p>
              <h6 className="text-red-400 font-bold">{donut.donutPrice}</h6>
              <div className="flex flex-row justify-center items-center gap-5 mt-5 my-2">
                <button
                  onClick={() => navigatePage("/edit/" + donut.donutId)}
                  className="bg-orange-400 rounded-md p-2"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteData(donut.donutId)}
                  className="bg-red-400 rounded-md p-2"
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReadDonutData;
