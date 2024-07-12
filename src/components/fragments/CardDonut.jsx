import Button from "../elements/Button";

const CardDonut = ({children}) => {
    return <div className="relative w-full max-w-xs bg-white border border-amber-400 rounded-2xl shadow m-2 p-3 flex flex-col">
      {children}
    </div>
};

const CardHeader = ({donutImg, donutPrice, donutName}) => {
    return (
      <div className="bg-plate border-b-2 border-orange-300">
        <div className="my-10 p-3">
          <img src={donutImg} alt={donutName} />
        </div>
        <p className="absolute font-poppins font-semibold top-0 right-0 bg-amber-400 py-2 px-4 rounded-tr-2xl rounded-bl-2xl">
          {donutPrice}
        </p>
      </div>
    );
};

const CardBody = ({donutName, donutDesc}) => {
    return(
        <div className="h-full mt-3">   
            <h1 className="font-bold text-lg text-center">{donutName}</h1>
            <p>{donutDesc}</p>
        </div>
    )
};

const CardFooter = ({donutId, handleAddToOrder}) => {
    return(
        <Button addedClassname="bg-orange-500" onClick={() => handleAddToOrder(donutId)}>Tambah</Button>
    ) 
        
};

CardDonut.CardHeader = CardHeader;
CardDonut.CardBody = CardBody;
CardDonut.CardFooter = CardFooter;

export default CardDonut;