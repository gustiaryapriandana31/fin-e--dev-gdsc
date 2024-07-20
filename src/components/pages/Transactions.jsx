import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";
import TableHeader from "../elements/TableHeader";
import TableData from "../elements/TableData";


const Transactions = () => {
    const [donutsCartTrx, setDonutsCartTrx] = useState([]);
    const [donutTotalPriceTrx, setDonutTotalPriceTrx] = useState(0);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerTakeDate, setCustomerTakeDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const override = {
      display: "flex",
      margin: "0 auto",
      borderColor: "orange",
    };

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
          window.location.href = "/transaction";
          localStorage.removeItem("donutsCart");
        });
      } catch (error) {
        console.log("Error on process your transaction : ", error);
      }
    };

    const handleSubmitForm = async (e) => {
      setIsLoading(true);
      try {
        e.preventDefault();
        await createData(customerName, customerPhone, customerTakeDate, donutsCartTrx);
        setCustomerName("");
        setCustomerPhone("");
        setCustomerTakeDate("");
      } catch (error) {
        console.error("Error creating data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section>
        <h1 className="text-center text-3xl text-orange-400 font-bold font-poppins my-10">
          Pesanan Anda
        </h1>
        <Link
          to="/donuts"
          className="md:ml-10 ml-8 md:text-base text-sm bg-blue-400 hover:bg-blue-600 font-bold mt-8 md:px-6 md:py-2 p-2 rounded-lg text-white cursor-pointer"
        >
          Kembali
        </Link>
        <div className="md:flex md:flex-row md:justify-center">
          <form
            onSubmit={handleSubmitForm}
            className="basis-1/2 md:w-1/2 w-[90%] md:p-10 p-4 mx-auto shadow-xl bg-white/10 rounded-xl"
          >
            <div className="md:mb-3 mb-5">
              <Label htmlFor="name">Your Name :</Label>
              <Input
                type="text"
                name="name"
                value={customerName}
                placeholder="Enter your name"
                onChange={handleCustomerNameChange}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="phone">Phone Number:</Label>
              <Input
                type="number"
                name="phone"
                value={customerName}
                placeholder="Enter your phone number"
                onChange={handleCustomerPhoneChange}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="takeDate">Pick Up Date :</Label>
              <Input
                type="date"
                name="takeDate"
                value={customerTakeDate}
                onChange={handleCustomerTakeDateChange}
              />
            </div>
            <div className="flex flex-row gap-3">
              <Button
                addedClassname={`bg-orange-500 hover:bg-orange-700 font-bold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : "opacity-100"
                }`}
                disabled={
                  isLoading ||
                  customerName.length === 0 ||
                  customerPhone.length === 0 ||
                  customerTakeDate.length === 0
                }>
                Pesan
              </Button>

              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-20 ${
                  isLoading ? "block" : "hidden"
                }`}
              >
                <ClipLoader
                  color="#E4B14E"
                  loading={isLoading || false}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <h6 className="text-center">Loading...</h6>
              </div>

              <Button
                addedClassname={`bg-yellow-500 hover:bg-yellow-700 font-bold ${
                  donutTotalPriceTrx == 0 ? "block" : "hidden"
                }`}
                disabled={
                  customerName.length === 0 ||
                  customerPhone.length === 0 ||
                  customerTakeDate.length === 0
                }
              >
                Struk
              </Button>
            </div>
            {donutTotalPriceTrx == 0 ? (
              <article className="mt-6 p-3 bg-green-400/40 rounded-lg md:text-xs text-[0.6rem] font-roboto opacity-80">
                <h1 className="font-semibold mb-1">
                  Yeayy, pesanan sudah kami terima
                </h1>
                <p>
                  Selanjutnya silahkan ambil pesanan dan lakukan pembayaran
                  sesuai tanggal yang anda pilih{" "}
                  <span className="text-blue-600 font-semibold">
                    Terima kasih banyak Salam Donat Manis :)
                  </span>
                </p>
              </article>
            ) : (
              <article className="mt-6 p-3 bg-orange-400/40 rounded-lg md:text-xs text-[0.6rem] font-roboto opacity-80">
                <h1 className="font-semibold mb-1">
                  Tekan tombol pesan untuk memproses transaksi anda
                </h1>
                <p>
                  Website ini hanya untuk melakukan pemesanan donat saja, untuk
                  pengambilan donat dan pembayaran langsung dilakukan di toko
                  ya.{" "}
                  <span className="text-green-600 font-semibold">
                    Terima kasih atas pesanan anda, Salam Donat Manis :){" "}
                  </span>
                </p>
              </article>
            )}
          </form>

          <section className="basis-1/2 bg-amber-100/50 rounded-3xl md:p-8 p-6 md:mt-0 mt-10 mb-5 md:border-none border-t-2 border-yellow-400">
            <div
              className={`grid md:grid-cols-5 grid-cols-3 bg-big-plate rounded-full p-3 ${
                donutsCartTrx.length > 0 ? "block" : "hidden"
              }`}
            >
              {donutsCartTrx.length > 0 &&
                donutsCartTrx.map((item) => (
                  <div key={item.donutId} className="md:-mr-20 -mr-44">
                    <img
                      src={item.donutImg}
                      alt={item.donutName}
                      className="md:-ml-10 -ml-16 md:w-full w-3/4"
                    />
                  </div>
                ))}
            </div>
            <p className="text-center mt-4 text-xs text-orange-400 font-roboto-mono italic">
              Gambar donat yang anda pesan
            </p>

            <table className="mx-auto bg-amber-100/80 my-10 text-left table-auto">
              <thead className="p-4 md:text-base text-[0.77rem] text-center font-bold font-poppins">
                <tr>
                  <TableHeader>No</TableHeader>
                  <TableHeader>Donut Name</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>Quantity</TableHeader>
                  <TableHeader>Total Price</TableHeader>
                </tr>
              </thead>
              <tbody className="text-center md:text-base text-xs">
                {donutsCartTrx.length > 0 &&
                  donutsCartTrx.map((item, index) => (
                    <tr key={item.donutId}>
                      <TableData>{index+1}</TableData>
                      <TableData>{item.donutName}</TableData>
                      <TableData>{item.donutPrice}</TableData>
                      <TableData>{item.qty}</TableData>
                      <TableData>{item.qty * item.donutPrice}</TableData>
                    </tr>
                  ))}
                <tr>
                  <TableData colSpan={4}>Grand Total Price</TableData>
                  <TableData>{donutTotalPriceTrx}</TableData>
                </tr>
              </tbody>
            </table>
            <p className="font-semibold font-poppins md:text-lg text-sm">
              Total yang harus dibayar :{" "}
              <span className="text-orange-400">Rp. {donutTotalPriceTrx}</span>
            </p>
          </section>
        </div>
      </section>
    );
}

export default Transactions;