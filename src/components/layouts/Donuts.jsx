import { useEffect, useState } from "react";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import CardDonut from "../fragments/CardDonut";

const Donuts = () => {
  const [donutsData, setDonutsData] = useState([]);
  const [donutsCart, setDonutsCart] = useState([]);
  const [donutTotalPrice, setDonutTotalPrice] = useState(0);
  
  useEffect(() => {
      setDonutsCart(JSON.parse(localStorage.getItem("donutsCart")) || []);
  }, []);

  useEffect(() => {
    if (donutsCart.length > 0) {
      const sumTotal = donutsCart.reduce((acc, item) => {
        const donut = donutsData.find(
          (donut) => donut.donutId === item.donutId
        );
        return acc + donut.donutPrice * item.qty;
      }, 0);
      setDonutTotalPrice(sumTotal);
      localStorage.setItem("donutsCart", JSON.stringify(donutsCart));
    }
  }, [donutsCart, donutsData]);

  // To read Data from Database Firestore
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
  
  const handleAddToOrder = (donutId) => {
    if (donutsCart.find((item) => item.donutId === donutId)) {
      setDonutsCart(
        donutsCart.map((item) =>
          item.donutId === donutId ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setDonutsCart([...donutsCart, { donutId, qty: 1 }]);
    }
  };

  return (
    <div className="p-10">
      <h2 className="mt-2 mb-6 text-center text-4xl font-bold text-orange-600">
        All Donuts Available
      </h2>
      <div className="flex flex-row">
        <div className="w-3/4 flex flex-row flex-wrap">
          {donutsData.map((data) => (
            <CardDonut key={data.donutId}>
              <CardDonut.CardHeader
                donutImg={data.donutImg}
                donutPrice={data.donutPrice}
                donutName={data.donutName}
              />
              <CardDonut.CardBody
                donutName={data.donutName}
                donutDesc={data.donutDesc}
              />
              <CardDonut.CardFooter
                donutId={data.donutId}
                handleAddToOrder={handleAddToOrder}
              />
            </CardDonut>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold">Cart</h1>
          <table className="text-left table-auto border-separate">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {donutsCart.length > 0 &&
                donutsCart.map((item) => {
                  const donut = donutsData.find(
                    (donut) => donut.donutId === item.donutId
                  );
                  return (
                    <tr key={item.donutId}>
                      <td>{donut.donutName}</td>
                      <td>{donut.donutPrice}</td>
                      <td>
                        <img
                          src={donut.donutImg}
                          alt={donut.donutName}
                          className="w-20 h-10"
                        />
                      </td>
                      <td>{item.qty}</td>
                      <td>{item.qty * donut.donutPrice}</td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={4}>Grand Total Price</td>
                <td>{donutTotalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donuts;
