const PopUpTransaction = ({popUpCart, setPopUpCart, selectedData}) => {

    const handleCloseCart = () => {
        setPopUpCart(!popUpCart);
    };

  return (
    <div className="cart-popup">
        {selectedData && (
            <div className="md:w-2/5 md:px-8 p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full right-0 bg-slate-200 rounded-xl">
            <h1 className="text-3xl font-bold text-center">Cart</h1>
            {selectedData.length > 0 && (
                <table className="text-left table-auto border-separate">
                <tbody className="">
                    {selectedData.map((item, index) => (
                    <tr key={item.donutId} className="flex">
                        <tr>{index + 1}</tr>
                        <tr>{item.donutName}f</tr>
                        <tr>{item.donutPrice}</tr>
                        <tr>{item.qty}</tr>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
            <button onClick={handleCloseCart}>Close Cart</button>
            </div>
        )}    
    </div>
  );
};

export default PopUpTransaction;
