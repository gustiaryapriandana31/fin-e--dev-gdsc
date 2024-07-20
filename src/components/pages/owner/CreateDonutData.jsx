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
    <div className="w-4/5 h-screen md:px-20 px-2 py-12 mx-auto bg-gradient-to-br from-orange-100/10 to-yellow-400">
      <form
        onSubmit={handleSubmit}
        className="md:w-3/4 py-5 md:px-10 px-3 shadow-md shadow-white md:border md:border-orange-400 rounded-lg">
        <h1 className="font-bold md:text-3xl text-xl font-poppins text-center text-orange-400 mb-10">
          CREATE DONUT DATA
        </h1>
        <div className="mb-3">
          <Label htmlFor="donutName" addedClassName="text-sm mb-0">Donut Name :</Label>
          <Input
            type="text"
            name="donutName"
            placeholder="ex : Donut Chocolate"
            value={donutName}
            onChange={handleDonutNameChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutDesc" addedClassName="text-sm mb-0">Donut Description :</Label>
          <Input
            type="text"
            name="donutDesc"
            placeholder="Just little description about the donut"
            value={donutDesc}
            onChange={handleDonutDescChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutPrice" addedClassName="text-sm mb-0">Donut Price :</Label>
          <Input
            type="text"
            name="donutPrice"
            value={donutPrice}
            onChange={handleDonutPriceChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="donutImage" addedClassName="text-sm mb-0">Donut Image :</Label>
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
