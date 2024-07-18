import { useEffect, useState, useContext } from "react";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../layouts/Navbar";
import CardDonut from "../fragments/CardDonut";
// import { CartDonut } from "../../context/CartContext";

const Donuts = () => {
  // const { Cart, setCart } = useContext(CartDonut);
  const [donutsData, setDonutsData] = useState([]);
  const [donutsCart, setDonutsCart] = useState([]);
  const [donutTotalPrice, setDonutTotalPrice] = useState(0);
  const [popUpCart, setPopUpCart] = useState(false);
  
  useEffect(() => {
      setDonutsCart(JSON.parse(localStorage.getItem("donutsCart")) || []);
  }, []);

  useEffect(() => {
    if (donutsCart.length > 0) {
      const sumTotal = donutsCart.reduce((acc, item) => {
        return acc + item.donutPrice * item.qty;
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
  
  const handleAddToCart = (donutId, donutPrice, donutName, donutDesc, donutImg) => {
    if (donutsCart.find((item) => item.donutId === donutId)) {
      setDonutsCart(
        donutsCart.map((item) =>
          item.donutId === donutId ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setDonutsCart([...donutsCart, { donutId:donutId, donutPrice: donutPrice, donutName: donutName, donutDesc: donutDesc, donutImg: donutImg, qty: 1 }]);
    }
  };

  return (
    <div className="md:p-8 p-3">
      <Navbar />
      <h2 className="mt-2 md:mb-6 mb-3 text-center md:text-4xl text-2xl font-bold text-orange-600">
        All Donuts Available <span className="md:hidden text-sm ml-5 inline-block p-2 bg-orange-500 text-white rounded-lg" onClick={() => setPopUpCart(!popUpCart)}>Cart <span className="text-xs font-bold text-white text-center">{donutsCart.length}</span></span>
      </h2>
      <div className="relative md:static md:flex flex-row md:gap-5">
        <div className={`md:mb-0 mb-7 relative md:w-3/5 grid md:grid-cols-3 grid-cols-2 gap-3 ${popUpCart ? "opacity-50" : "opacity-100"}`}>
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
                donutPrice={data.donutPrice}
                donutName={data.donutName}
                donutDesc={data.donutDesc}
                donutImg={data.donutImg}
                handleAddToCart={handleAddToCart}
              />
            </CardDonut>
          ))}
        </div>
        <div className={`md:static md:block md:w-2/5 md:px-8 ${popUpCart ? "block p-5 absolute top-0 w-full right-0 bg-slate-200 rounded-xl" : "hidden"}`}>
          <h1 className="text-3xl font-bold text-center">Cart</h1>
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
                  console.log(item.donutName);
                  return (
                    <tr key={item.donutId}>
                      <td>{item.donutName}</td>
                      <td>{item.donutPrice}</td>
                      <td><img src={item.donutImg} alt={item.donutName}/></td>
                      <td>{item.qty}</td>
                      <td>{item.qty * item.donutPrice}</td>
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
