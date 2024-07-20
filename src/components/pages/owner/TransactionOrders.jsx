import { donutsDataDB } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import PopUpTransaction from "../fragments/PopUpTransaction";


const TransactionOrders = () => {
  // const navigatePage = useNavigate();
  const [transactionsData, setTransactionsData] = useState([]);
  const [popUpCart, setPopUpCart] = useState(false);
  // const { transactionId } = useParams();
  const [selectedData, setSelectedData] = useState(null);
  // const [selectedData, setSelectedData] = useState(null);

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
      const selectedDataRef = await getDoc(
        doc(donutsDataDB, "transactionsData", customerTransactionId)
      );

      if (selectedDataRef.exists()) {
        const selectedData = selectedDataRef.data().customerDonutsCart;
        setSelectedData(selectedData); // Assuming you have a state for cart data
        setPopUpCart(true);
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
    <div className="md:w-full w-4/5 bg-gray-400 overflow-x-auto md:static relative">
      <h1 className="text-center md:text-4xl text-2xl font-bold text-orange-600 font-serif mt-7">
        Customer Orders and Transactions
      </h1>
      <table className="mx-auto bg-amber-100/80 my-10 text-left table-auto">
        <thead className="p-4 md:text-base text-[0.77rem] text-center font-bold font-poppins">
          <tr className="">
            <TableHeader>No</TableHeader>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Pick Up Date</TableHeader>
            <TableHeader>Donuts Order</TableHeader>
          </tr>
        </thead>
        <tbody className="text-center md:text-base text-xs">
          {transactionsData.length > 0 &&
            transactionsData.map((item, index) => (
              <tr
                key={item.transactionId}
                className={`${popUpCart && "bg-green-300"}`}
              >
                <TableData>{index + 1}</TableData>
                <TableData>{item.customerName}</TableData>
                <TableData>{item.customerPhone}</TableData>
                <TableData>{item.customerTakeDate}</TableData>
                {/* <TableData><h1 className="cursor-pointer px-6 py-2 rounded-lg text-white bg-orange-500 hover:bg-orange-700 font-bold" onClick={() => setPopUpCart(!popUpCart)}>Open</h1></TableData> */}
                <TableData>
                  <button
                    onClick={() => handleCartClick(item.customerTransactionId)}
                  >
                    Open
                  </button>
                </TableData>
              </tr>
            ))}
        </tbody>
      </table>
      {popUpCart && 
        <PopUpTransaction popUpCart={popUpCart} setPopUpCart={setPopUpCart} selectedData={selectedData}/>
      }
    </div>
  );
};

const TableData = ({ children, colSpan = 0 }) => {
  return (
    <td className="border border-slate-600" colSpan={colSpan}>
      {children}
    </td>
  );
};

const TableHeader = ({ children }) => {
  return (
    <th className="md:py-2 md:px-5 p-1 bg-orange-300/80 border border-slate-600">
      {children}
    </th>
  );
};

export default TransactionOrders;
