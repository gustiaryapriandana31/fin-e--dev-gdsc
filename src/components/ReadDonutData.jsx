import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const ReadDonutData = () => {

    const [donutsData, setDonutsData] = useState([]);

    useEffect(() => {
        const readData = async () => {
            const donutsCollection = collection(db, "donutsData");
            try {
                const donutsDataSnapshot = await getDocs(donutsCollection);
                const allDonutsData = donutsDataSnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setDonutsData(allDonutsData);
            } catch (error) {
                console.log("Error reading data : ", error);
            }
        };

        readData();
    }, []);

    return (
      <div>
        <h1 className="mt-10 font-bold text-lg text-slate-700">All Donuts Data</h1>
        <ul>
          {donutsData.map((donut, index) => (
            <div key={index} className="flex flex-col gap-4 px-4 my-5">
              <li className="border p-2 bg-slate-200 rounded m-2">
                <h3>{donut.donutName}</h3>
                <p>{donut.donutDesc}</p>
                <h6 className="text-red-400 font-bold">{donut.donutPrice}</h6>
                <div className="flex flex-row justify-center items-center gap-5 mt-5 my-2">
                  <button className="bg-orange-400 rounded-md p-2">
                    Update
                  </button>
                  <button className="bg-red-400 rounded-md p-2">Delete</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default ReadDonutData;