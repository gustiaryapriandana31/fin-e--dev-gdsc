import { donutsDataDB, donutsImgDB } from "../../config/firebaseConfig";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreateDonutData = () => {
  const [donutName, setDonutName] = useState("");
  const [donutDesc, setDonutDesc] = useState("");
  const [donutPrice, setDonutPrice] = useState("");
  const [donutImg, setDonutImg] = useState("");

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
    const donutsDataRef = ref(donutsImgDB, "donutImages/" + imgfiles.name);
    uploadBytes(donutsDataRef, imgfiles).then((snapshot) => {
      // console.log("Data Image Donut : " + data);
      getDownloadURL(snapshot.ref).then((url) => {
        setDonutImg(url);
      });
    });
  };

  const createData = async (donutName, donutDesc, donutPrice, donutImg) => {
    const donutCollection = collection(donutsDataDB, "donutsData");
    try {
      await addDoc(donutCollection, {
        // Field name in Firestore : Value from the state
        donutName,
        donutDesc,
        donutPrice,
        donutImg,
      }).then(() => {
        alert("Data added successfully");
        window.location.href = "/read";
      });
    } catch (error) {
      console.log("Error adding data : ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createData(donutName, donutDesc, donutPrice, donutImg);
    setDonutName("");
    setDonutDesc("");
    setDonutPrice("");
    setDonutImg("");
  };

  return (
    <div>
      <h1>CREATE DONUT DATA</h1>
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
            donutPrice.length === 0 ||
            donutImg === ""
          }
          type="submit"
        >
          Input Data
        </button>
      </form>
    </div>
  );
};

export default CreateDonutData;
