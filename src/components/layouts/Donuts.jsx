import { useEffect, useState } from "react";
import { donutsDataDB, donutsImgDB } from "../../config/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import CardDonut from "../fragments/CardDonut";

const Donuts = () => {

    const [donutsData, setDonutsData] = useState([]);


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

    return (
      <div className="flex flex-row items-center">
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
                <CardDonut.CardFooter />
            </CardDonut>
        ))}
      </div>
    );
}

export default Donuts;