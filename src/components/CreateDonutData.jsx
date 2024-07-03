/* eslint-disable no-unused-vars */
import { db } from '../config/firebaseConfig';
import {useState} from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

// const DB = db.firestore();
// const DonutsData = DB.collection('donutsData');

const CreateDonutData = () => {

    const [donutName, setDonutName] = useState("");
    const [donutDesc, setDonutDesc] = useState("");
    const [donutPrice, setDonutPrice] = useState("");
    // const [donutImg, setDonutImg] = useState("");

    const handleDonutNameChange = (e) => {
        const value = e.target.value;
        setDonutName(value);
    }

    const handleDonutDescChange = (e) => {
        const value = e.target.value;
        setDonutDesc(value);
    }

    const handleDonutPriceChange = (e) => {
        const value = e.target.value;
        setDonutPrice(value);
    }

    const createData = async (donutName, donutDesc, donutPrice) => {
        const donutCollection = collection(db, "donutsData");
        try {
            await addDoc(donutCollection, {
                donutName,
                donutDesc,
                donutPrice,
            }).then(() => {
                alert("Data added successfully");
            });
        } catch (error) {
            console.log("Error adding data : ", error);
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createData(donutName, donutDesc, donutPrice);
        setDonutName("");
        setDonutDesc("");
        setDonutPrice("");
    }

    return (
      <div>
        <h1>CREATE DONUT DATA</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="donutName">Donut Name :</label>
            <input className='border border-black rounded p-1 m-2'
              autoFocus
              type="text"
              value={donutName}
              name="donutName"
              onChange={handleDonutNameChange}
            />
          </div>
          <div>
            <label htmlFor="donutDesc">Donut Description :</label>
            <input className='border border-black rounded p-1 m-2'
              type="text"
              value={donutDesc}
              name="donutDesc"
              onChange={handleDonutDescChange}
            />
          </div>
          <div>
            <label htmlFor="donutPrice">Donut Price :</label>
            <input className='border border-black rounded p-1 m-2'
              type="text"
              value={donutPrice}
              name="donutPrice"
              onChange={handleDonutPriceChange}
            />
          </div>
          <button className='p-2 bg-blue-400 text-white font-bold rounded'
            disabled={donutName.length === 0 || donutDesc.length === 0 || donutPrice.length === 0}
            type="submit"
          >
            Input Data
          </button>
        </form>
      </div>
    );
}

export default CreateDonutData;