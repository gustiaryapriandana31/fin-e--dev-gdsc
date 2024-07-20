import TableHeader from "../elements/TableHeader";
import TableData from "../elements/TableData";
import Button from "../elements/Button";

const PopUpTransaction = ({ popUpCart, setPopUpCart, selectedData, setSelectedData, endTransaction, setEndTransaction }) => {
  const handleCloseCart = () => {
    setPopUpCart(!popUpCart);
    setSelectedData([]);
  };

  const handleEndTransaction = () => {
    setEndTransaction(true)
  }

  return (
    <div className="cart-popup">
        {selectedData && (
            <div className="md:w-1/2 md:p-8 p-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full right-0 bg-white/90 shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-center">Detail Donuts Order</h1>
            {selectedData.length > 0 && (
                <table className="mx-auto bg-amber-100/80 my-10 text-left table-auto">
                    <thead className="p-4 md:text-base text-[0.77rem] text-center font-bold font-poppins">
                        <tr className="">
                        <TableHeader>No</TableHeader>
                        <TableHeader>Donut Name</TableHeader>
                        <TableHeader>Price</TableHeader>
                        <TableHeader>Quantity</TableHeader>
                        <TableHeader>Total Price</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedData.map((item, index) => (
                        <tr key={item.donutId} className="text-center">
                            <TableData>{index + 1}</TableData>
                            <TableData>{item.donutName}</TableData>
                            <TableData>{item.donutPrice}</TableData>
                            <TableData>{item.qty}</TableData>
                            <TableData>{item.qty * item.donutPrice}</TableData>
                        </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Button addedClassname="ml-4 bg-orange-500 hover:bg-orange-700 font-bold" onClick={handleCloseCart}>
                Close
            </Button>
            <Button addedClassname={`ml-4 font-bold ${endTransaction ? "bg-slate-500 cursor-not-allowed" : "bg-emerald-600  hover:bg-emerald-700 cursor-pointer"}`} onClick={handleEndTransaction} disabled={endTransaction}>
                Tandai Selesai
            </Button>
        </div>
      )}
    </div>
  );
};

export default PopUpTransaction;
