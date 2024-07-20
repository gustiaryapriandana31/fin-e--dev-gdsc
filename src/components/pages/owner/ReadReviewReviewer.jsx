import { donutsDataDB } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import TabbedNavigation from "../fragments/TabbedNavigation";

const tabs = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
// const tabs = ["Star 1", "Star 2", "Star 3", "Star 4", "Star 5"];

const ReadReviewReviewer = () => {

    const [activeTab, setActiveTab] = useState(false);
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        const readData = async () => {
            const reviewsCollection = collection(donutsDataDB, "reviewsData");
            try {
                const reviewsDataSnapshot = await getDocs(reviewsCollection);
                // Binding the data to the state
                const allReviewsData = reviewsDataSnapshot.docs.map((doc) => ({
                ...doc.data(),
                reviewId: doc.id,
                }));
                setReviewsData(allReviewsData);
            } catch (error) {
                console.log("Error display reviews : ", error);
            }
        };

        readData();
    }, []);

    return (
      <div className="md:w-full w-4/5">
        <h1 className="text-center md:text-4xl text-2xl font-bold text-orange-600 font-serif mt-7">
          All Reviews From Customers
        </h1>
        <TabbedNavigation tabs={tabs} />
        <section className="md:flex md:flex-row md:flex-wrap gap-4 md:p-10 p-6">
          {reviewsData.map((review) => (
            <div
              key={review.reviewId}
              className="border-2 border-orange-400 rounded-md px-5 py-3 md:w-1/4 shadow-xl shadow-amber-100/70 mb-5 md:mb-0"
            >
              <h1 className="mb-4 text-xl font-semibold font-mono text-amber-400">
                {review.reviewerName}
              </h1>
              <p className="text-md">{review.reviewContent}</p>

              <div className="flex mt-5 items-center">
                {Array(Math.floor(review.reviewRating))
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} color="gold" />
                  ))}

                {review.reviewRating % 1 !== 0 && (
                  <FaStarHalfAlt color="gold" />
                )}
                <p className="ml-2 text-sm font-poppins font-semibold">
                  {review.reviewRating}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
}

export default ReadReviewReviewer;