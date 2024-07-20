import { donutsDataDB, donutsImgDB } from "../../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const UpdateDonutData = () => {

    const {donutId} = useParams();
    const [donutName, setDonutName] = useState("");
    const [donutDesc, setDonutDesc] = useState("");
    const [donutPrice, setDonutPrice] = useState("");
    const [donutImg, setDonutImg] = useState("");

    
    useEffect(() => {
      const getDataDonut = async () => {
        const donutDataRef = await getDoc(doc(donutsDataDB, "donutsData", donutId));
        try {
          setDonutName(donutDataRef.data().donutName);
          setDonutDesc(donutDataRef.data().donutDesc);
          setDonutPrice(donutDataRef.data().donutPrice);
          setDonutImg(donutDataRef.data().donutImg);
        } catch (error) {
          console.log("Error updating data : ", error);
        }
        
      };
      getDataDonut();
    }, [donutId]);

    const updateData = async (donutName, donutDesc, donutPrice, donutImg) => {
      const donutDataRef = doc(donutsDataDB, "donutsData", donutId);
      try {
        await updateDoc(donutDataRef, {
          donutName,
          donutDesc,
          donutPrice,
          donutImg
        }).then(() => {
          alert("Data updated successfully!");
          window.location.href = "/read";
        });
      } catch (error) {
        console.error("Error updating data:", error);
      }
    };

    const handleDonutNameChange = (e) => {
      const value = e.target.value;
      setDonutName(value);
    };

    const handleDonutDescChange = (e) => {
      const value = e.target.value;
      setDonutDesc(value);
    };

    const handleDonutPriceChange = (e) => {
      const value = e.target.value;
      setDonutPrice(value);
    };

    const handleUploadImage = (e) => {
      console.log("Image File : " + e.target.files[0]);
      const imgfiles = e.target.files[0];
      const donutsDataRef = ref(donutsImgDB, "donutImages/" + v4());
      uploadBytes(donutsDataRef, imgfiles).then((data) => {
        getDownloadURL(data.ref).then((url) => {
          setDonutImg(url);
        });
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      updateData(donutName, donutDesc, donutPrice);
    };

    return (
      <div>
        <h1>UPDATE DONUT DATA</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="donutName">Donut Name :</label>
            <input
              className="border border-black rounded p-1 m-2"
              autoFocus
              type="text"
              value={donutName}
              name="donutName"
              onChange={handleDonutNameChange}
            />
          </div>
          <div>
            <label htmlFor="donutDesc">Donut Description :</label>
            <input
              className="border border-black rounded p-1 m-2"
              type="text"
              value={donutDesc}
              name="donutDesc"
              onChange={handleDonutDescChange}
            />
          </div>
          <div>
            <label htmlFor="donutPrice">Donut Price :</label>
            <input
              className="border border-black rounded p-1 m-2"
              type="text"
              value={donutPrice}
              name="donutPrice"
              onChange={handleDonutPriceChange}
            />
          </div>
          <div>
            <label htmlFor="donutImg">Donut Image :</label>
            <input
              className="border border-black rounded p-1 m-2"
              type="file"
              accept="image/*"
              name="donutImg"
              onChange={handleUploadImage}
            />
          </div>
          <button
            className="p-2 bg-blue-400 text-white font-bold rounded"
            disabled={
              donutName.length === 0 ||
              donutDesc.length === 0 ||
              donutPrice.length === 0
            }
            type="submit"
          >
            Edit Data
          </button>
        </form>
      </div>
    );
}

export default UpdateDonutData;
