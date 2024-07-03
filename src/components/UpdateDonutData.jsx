/* eslint-disable no-unused-vars */
import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const UpdateDonutData = () => {

    const {donutId} = useParams();
    const [donutName, setDonutName] = useState("");
    const [donutDesc, setDonutDesc] = useState("");
    const [donutPrice, setDonutPrice] = useState("");
    
    useEffect(() => {
      const getDataDonut = async () => {
        const donutDataRef = await getDoc(doc(db, "donutsData", donutId));
        try {
          setDonutName(donutDataRef.data().donutName);
          setDonutDesc(donutDataRef.data().donutDesc);
          setDonutPrice(donutDataRef.data().donutPrice);
        } catch (error) {
          console.log("Error reading data : ", error);
        }
        
      };
      getDataDonut();
    }, [donutId]);

    const updateData = async (donutName, donutDesc, donutPrice) => {
      const donutDataRef = doc(db, "donutsData", donutId);
      try {
        await updateDoc(donutDataRef, {
          donutName,
          donutDesc,
          donutPrice,
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
