import { useEffect, useState } from "react";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import CardDonut from "../fragments/CardDonut";
import Button from "../elements/Button";
import TableHeader from "../elements/TableHeader";
import TableData from "../elements/TableData";

const Donuts = () => {
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
  }, [donutsCart]);

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

  const itemQty = donutsCart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <section className="md:pt-5">
      <Navbar />
      <div className="md:p-8 p-3">
        <div className="flex flex-row justify-center items-center my-5">
          <h2 className="basis-3/4 mt-2 md:mb-6 mb-3 text-center md:text-4xl text-2xl font-bold text-orange-600">
            All Donuts Available 
          </h2>
          <div className="basis-1/2 md:hidden text-lg text-center p-2 bg-orange-500 text-white rounded-lg" onClick={() => setPopUpCart(!popUpCart)}>Cart {donutsCart.length} | Qty {itemQty}</div>
        </div>
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
            <table className="mx-auto my-10 text-left table-auto">
              <thead className="p-4 md:text-base text-[0.77rem] text-center font-bold font-poppins">
                <tr>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>Image</TableHeader>
                  <TableHeader>Quantity</TableHeader>
                  <TableHeader>Total Price</TableHeader>
                </tr>
              </thead>
              <tbody className="text-center md:text-base text-xs">
                {donutsCart.length > 0 &&
                  donutsCart.map((item) => {
                    return (
                      <tr key={item.donutId}>
                        <TableData>{item.donutName}</TableData>
                        <TableData>{item.donutPrice}</TableData>
                        <TableData><img src={item.donutImg} alt={item.donutName}/></TableData>
                        <TableData>{item.qty}</TableData>
                        <TableData>{item.qty * item.donutPrice}</TableData>
                      </tr>
                    );
                  })}
                <tr className="font-roboto-mono">
                  <td colSpan={4} className="font-bold text-orange-500 border border-slate-600 p-1 md:text-base text-xs">Grand Total Price</td>
                  <td className="font-bold text-orange-500 border border-slate-600 p-1 md:text-base text-xs">{donutTotalPrice}</td>
                </tr>
                <Link to="/transaction">
                  <Button
                  addedClassname="mt-8 bg-orange-500 hover:bg-orange-700 font-bold"
                  disabled={
                    donutTotalPrice == 0
                  }>
                  Pesan
                </Button>

                </Link>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donuts;