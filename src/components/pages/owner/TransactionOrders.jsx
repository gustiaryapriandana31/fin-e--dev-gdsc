import { donutsDataDB } from "../../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import PopUpTransaction from "../../fragments/PopUpTransaction";
import TableHeader from "../../elements/TableHeader";
import TableData from "../../elements/TableData";
import Button from "../../elements/Button"; 
import { LuDonut } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TransactionOrders = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [popUpCart, setPopUpCart] = useState(false);
  const [endTransaction, setEndTransaction] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const readData = async () => {
      const transactionsData = collection(donutsDataDB, "transactionsData");
      try {
        const transactionsDataSnapshot = await getDocs(transactionsData);
        // Binding the data to the state
        const allTransactionsData = transactionsDataSnapshot.docs.map((doc) => ({
          ...doc.data(),
          customerTransactionId: doc.id,
        }));
        setTransactionsData(allTransactionsData);
      } catch (error) {
        console.log("Error display transactions data : ", error);
      }
    };

    readData();
  }, []);

  const handleCartClick = async (customerTransactionId) => {
    try {
      setPopUpCart(true);
      const selectedDataRef = await getDoc(
        doc(donutsDataDB, "transactionsData", customerTransactionId)
      );
  

      if (selectedDataRef.exists()) {
        const selectedData = selectedDataRef.data().customerDonutsCart;
        setSelectedData(selectedData); // Assuming you have a state for cart data
      } else {
        console.log(
          "No cart data found for transaction:",
          customerTransactionId
        );
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };


  return (
    <div className="md:w-full w-4/5 bg-white overflow-x-auto md:static relative">
      <h1 className="text-center md:text-4xl text-2xl font-bold text-orange-600 font-serif mt-7">
        Customer Orders and Transactions
      </h1>
      <table className="mx-auto bg-amber-100/80 my-10 table-auto w-[90%]">
        <thead className="p-4 md:text-base text-[0.77rem] text-center font-bold font-poppins">
          <tr className="">
            <TableHeader>No</TableHeader>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Pick Up Date</TableHeader>
            <TableHeader>Donuts Order</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody className="text-center md:text-base text-xs">
          {transactionsData.length > 0 &&
            transactionsData.map((item, index) => (
              <tr key={item.transactionId} className={`${popUpCart && "bg-green-300"}`}>
                <TableData>{index + 1}</TableData>
                <TableData>{item.customerName}</TableData>
                <TableData>{item.customerPhone}</TableData>
                <TableData>{item.customerTakeDate}</TableData>
                <TableData>
                  <Button addedClassname="md:px-4 md:py-2 px-px py-1 bg-orange-500 hover:bg-orange-700 font-bold md:text-base text-[0.6rem]" onClick={() => handleCartClick(item.customerTransactionId)}>
                      <LuDonut className="hidden md:inline-block md:text-lg" /> Open
                  </Button>
                </TableData>
                {
                  endTransaction ? 
                  <TableData><p className="text-emerald-600 text-xs font-poppins"><IoIosCheckmarkCircleOutline className="hidden md:inline-block text-emerald-800"/> Selesai...</p></TableData>
                  :
                  <TableData><p className="text-slate-600 text-xs font-poppins"><CiTimer className="hidden md:inline-block text-slate-800"/> Menunggu...</p></TableData>
                }
              </tr>
            ))}
        </tbody>
      </table>
      {popUpCart && 
        <PopUpTransaction popUpCart={popUpCart} setPopUpCart={setPopUpCart} selectedData={selectedData} setSelectedData={setSelectedData} endTransaction={endTransaction} setEndTransaction={setEndTransaction}/>
      }
    </div>
  );
};

export default TransactionOrders;
