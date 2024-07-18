import Button from "../elements/Button";

const CardDonut = ({children}) => {
    return <div className="relative w-full max-w-xs bg-white border border-amber-400 rounded-2xl shadow md:m-2 md:p-3 p-2 flex flex-col">
      {children}
    </div>
};

const CardHeader = ({donutImg, donutPrice, donutName}) => {
    return (
      <div className="md:bg-plate border-b-2 border-orange-300">
        <div className="md:my-10 my-2 md:p-3 p-1">
          <img src={donutImg} alt={donutName} className="md:w-full md:h-full w-32 h-20"/>
        </div>
        <p className="absolute font-poppins font-semibold top-0 right-0 bg-amber-400 py-2 md:px-4 px-1  rounded-tr-2xl rounded-bl-2xl text-sm md:text-lg">
          {donutPrice}
        </p>
      </div>
    );
};

const CardBody = ({donutName, donutDesc}) => {
    return(
        <div className="h-full mt-3">   
            <h1 className="font-bold md:text-lg text-sm w-full text-center">{donutName}</h1>
            <p className="md:text-sm text-xs">{donutDesc}</p>
        </div>
    )
};

const CardFooter = ({donutId, donutPrice, donutName, donutDesc, donutImg, handleAddToCart}) => {
    return(
        <Button addedClassname="bg-orange-500 rounded-xl" onClick={() => handleAddToCart(donutId, donutPrice, donutName, donutDesc, donutImg)}>Tambah</Button>
    ) 
        
};

CardDonut.CardHeader = CardHeader;
CardDonut.CardBody = CardBody;
CardDonut.CardFooter = CardFooter;

export default CardDonut;