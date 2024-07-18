import { useEffect, useState } from "react";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";

const Transactions = () => {
    const [donutsCartTrx, setDonutsCartTrx] = useState([]);
    const [donutTotalPriceTrx, setDonutTotalPriceTrx] = useState(0);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerTakeDate, setCustomerTakeDate] = useState("");
    // const [succeedTransaction, setSucceedTransaction] = useState(false);

    useEffect(() => {
      setDonutsCartTrx(JSON.parse(localStorage.getItem("donutsCart")) || []);
    }, []);

    useEffect(() => {
      if (donutsCartTrx.length > 0) {
        const sumTotal = donutsCartTrx.reduce((acc, item) => {
          return acc + item.donutPrice * item.qty;
        }, 0);
        setDonutTotalPriceTrx(sumTotal);
        localStorage.setItem("donutsCart", JSON.stringify(donutsCartTrx));
      }
    }, [donutsCartTrx]);

    const handleCustomerNameChange = (e) => {
      setCustomerName(e.target.value);
    };

    const handleCustomerPhoneChange = (e) => {
      setCustomerPhone(e.target.value);
    };

    const handleCustomerTakeDateChange = (e) => {
      setCustomerTakeDate(e.target.value);
    };

    const createData = async (customerName, customerPhone, customerTakeDate, donutsCartTrx) => {
      const reviewsCollection = collection(donutsDataDB, "transactionsData");
      try {
        await addDoc(reviewsCollection, {
          // Field name in Firestore : Value from the state
          customerTransactionDate: new Date().toISOString(),
          customerName,
          customerPhone,
          customerTakeDate,
          customerDonutsCart: donutsCartTrx,
        }).then(() => {
          // alert("Transaction is successfully");
          window.location.href = "/transaction";
          localStorage.removeItem("donutsCart");
          // setSucceedTransaction(true);
        });
      } catch (error) {
        console.log("Error on process your transaction : ", error);
      }
    };

    const handleSubmitForm = (e) => {
      e.preventDefault();
      createData(customerName, customerPhone, customerTakeDate, donutsCartTrx);
      // setCustomerName("");
      // setCustomerPhone("");
      // setCustomerTakeDate("");
    };

    return(
        <section>
            <h1 className="text-center text-3xl text-orange-400 font-bold font-poppins my-10">Pesanan Anda</h1>
            <div className="md:flex md:flex-row md:justify-center">
                <form onSubmit={handleSubmitForm} className="basis-1/2 md:w-1/2 w-[90%] md:p-10 p-4 mx-auto shadow-xl bg-white/10 rounded-xl">
                    <div className="md:mb-3 mb-5">
                        <Label htmlFor="name">Your Name :</Label>
                        <Input type="text" name="name" value={customerName} placeholder="Enter your name" onChange= {handleCustomerNameChange}/>
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="phone">Phone Number:</Label>
                        <Input type="number" name="phone" value={customerName} placeholder="Enter your phone number" onChange= {handleCustomerPhoneChange}/>
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="takeDate">Pick Up Date :</Label>
                        <Input type="date" name="takeDate" value={customerTakeDate} onChange={handleCustomerTakeDateChange}/>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Button addedClassname="bg-orange-500 hover:bg-orange-700 font-bold" disabled={customerName.length === 0 ||
                          customerPhone.length === 0 ||
                          customerTakeDate.length === 0}>Pesan
                      </Button>
                      <Button addedClassname={`bg-orange-500 hover:bg-orange-700 font-bold ${donutTotalPriceTrx == 0 ? "block" : "hidden"}`} disabled={customerName.length === 0 ||
                          customerPhone.length === 0 ||
                          customerTakeDate.length === 0}>Struk
                      </Button>
                    </div>
                    {donutTotalPriceTrx == 0 ? 
                      <article className="mt-6 p-3 bg-green-400/40 rounded-lg md:text-xs text-[0.6rem] font-roboto opacity-80">
                          <h1 className="font-semibold mb-1">Yeayy, pesanan sudah kami terima</h1>
                          <p>Selanjutnya silahkan ambil pesanan dan lakukan pembayaran sesuai tanggal yang anda pilih <span className="text-blue-600 font-semibold">Terima kasih banyak Salam Donat Manis :)</span></p>
                      </article>
                      : 
                      <article className="mt-6 p-3 bg-orange-400/40 rounded-lg md:text-xs text-[0.6rem] font-roboto opacity-80">
                        <h1 className="font-semibold mb-1">Tekan tombol pesan untuk memproses transaksi anda</h1>
                        <p>Website ini hanya untuk melakukan pemesanan donat saja, untuk pengambilan donat dan pembayaran langsung dilakukan di toko ya. <span className="text-green-600 font-semibold">Terima kasih atas pesanan anda, Salam Donat Manis :) </span></p>
                      </article>
                      
                    }
                </form>
    
                <section className="basis-1/2 p-8 md:mt-0 mt-10 mb-5 md:border-none border-t-2 border-yellow-400">
                  <div className="grid md:grid-cols-5 grid-cols-3 bg-big-plate rounded-full p-3">
                    {donutsCartTrx.length > 0 &&
                        donutsCartTrx.map((item) => {
                        return (
                          <div key={item.donutId} className="md:-mr-20 -mr-44">
                            <img src={item.donutImg} alt={item.donutName} className="md:-ml-10 -ml-16 md:w-full w-3/4"/>
                          </div>
                        );
                    })}
                  </div>
                  <p className="text-center mt-4 text-xs text-orange-400 font-roboto-mono italic">Gambar donat yang anda pesan</p>
    
                  <table className="my-10 text-left table-auto border-collapse border border-slate-500">
                    <thead className="">
                      <tr>
                        <th className="border border-slate-600">Name</th>
                        <th className="border border-slate-600">Price</th>
                        <th className="border border-slate-600">Quantity</th>
                        <th className="border border-slate-600">Total Price</th>
                      </tr>
                    </thead>
                      <tbody>
                        {donutsCartTrx.length > 0 &&
                          donutsCartTrx.map((item) => {
                            return (
                              <tr key={item.donutId}>
                                <td className="border border-slate-600">{item.donutName}</td>
                                <td className="border border-slate-600">{item.donutPrice}</td>
                                <td className="border border-slate-600">{item.qty}</td>
                                <td className="border border-slate-600">{item.qty * item.donutPrice}</td>
                              </tr>
                            );
                          })}
                        <tr>
                          <td colSpan={4} className="border border-slate-600">Grand Total Price</td>
                          <td>{donutTotalPriceTrx}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>Grand Total Price</p>
                    <p>{donutTotalPriceTrx}</p>
                </section>
            </div>
        </section>
    )
}

export default Transactions;