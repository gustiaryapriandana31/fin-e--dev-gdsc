// import { createContext, useState, useEffect } from "react";
// import { donutsDataDB } from "../../config/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";


// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//     const [donutsCart, setDonutsCart] = useState([]);
//     const [donutsData, setDonutsData] = useState([]);
//     const [donutTotalPrice, setDonutTotalPrice] = useState(0);

//     useEffect(() => {
//         if (donutsCart.length > 0) {
//         const sumTotal = donutsCart.reduce((acc, item) => {
//             const donut = donutsData.find(
//             (donut) => donut.donutId === item.donutId
//             );
//             return acc + donut.donutPrice * item.qty;
//         }, 0);
//         setDonutTotalPrice(sumTotal);
//         // localStorage.setItem("donutsCart", JSON.stringify(donutsCart));
//         }
//     }, [donutsCart, donutsData]);

//     // To read Data from Database Firestore
//     useEffect(() => {
//         const readData = async () => {
//         const donutsCollection = collection(donutsDataDB, "donutsData");
//         try {
//             const donutsDataSnapshot = await getDocs(donutsCollection);
//             // Binding the data to the state
//             const allDonutsData = donutsDataSnapshot.docs.map((doc) => ({
//             ...doc.data(),
//             donutId: doc.id,
//             }));
//             setDonutsData(allDonutsData);
//         } catch (error) {
//             console.log("Error reading data : ", error);
//         }
//     };

//         readData();
//     }, []);

//     return (
//         <CartContext.Provider value={{ donutsCart, setDonutsCart }}>
//         {children}
//         </CartContext.Provider>
//     );
// }

// export const CartDonut = CartContext;
// export default CartProvider;