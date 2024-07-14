import { donutsDataDB, donutsImgDB } from "../../config/firebaseConfig";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";

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
    <div className="border border-orange-500 w-1/2 px-20 py-10 mx-auto mt-6 rounded-md bg-orange-400">
      <h1 className="font-bold text-3xl font-poppins text-center text-white mb-10">
        CREATE DONUT DATA
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label htmlFor="donutName">Donut Name :</Label>
          <Input
            type="text"
            name="donutName"
            value={donutName}
            onChange={handleDonutNameChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutDesc">Donut Description :</Label>
          <Input
            type="text"
            name="donutDesc"
            value={donutDesc}
            onChange={handleDonutDescChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutPrice">Donut Price :</Label>
          <Input
            type="text"
            name="donutPrice"
            value={donutPrice}
            onChange={handleDonutPriceChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutImage">Donut Image :</Label>
          <Input
            addedClassname
            type="file"
            name="donutImage"
            value={donutImg}
            onChange={handleUploadImage}
          />
        </div>

        <Button
          addedClassname="p-2 bg-orange-500 hover:bg-orange-700 font-bold"
          disabled={
            donutName.length === 0 ||
            donutDesc.length === 0 ||
            donutPrice.length === 0 ||
            donutImg === ""
          }
        >
          Input Data
        </Button>
      </form>
    </div>
  );
};

export default CreateDonutData;
