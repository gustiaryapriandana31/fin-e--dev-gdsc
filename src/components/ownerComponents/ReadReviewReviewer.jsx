import { donutsDataDB } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ReadReviewReviewer = () => {

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
      <div>
        <h1 className="text-center text-3xl font-bold text-orange-400 font-serif my-10">All Review From Customer</h1>
        <section className="flex flex-row flex-wrap gap-4 p-10">
            {reviewsData.map((review) => (
            <div key={review.reviewId} className="border-2 border-orange-400 rounded-md px-5 py-3 w-1/4 shadow-xl shadow-amber-100/70">
                <h1 className="mb-4 text-xl font-semibold font-mono text-amber-400">{review.reviewerName}</h1>
                <p className="text-md">{review.reviewContent}</p>

                <div className="flex mt-5 items-center">
                    {Array(Math.floor(review.reviewRating))
                        .fill(null)
                        .map((_, index) => (
                        <FaStar key={index} color="gold" />
                        ))}

                    {review.reviewRating % 1 !== 0 && <FaStarHalfAlt color="gold" />}
                    <p className="ml-2 text-sm font-poppins font-semibold">{review.reviewRating}</p>
                </div>

            </div>
            ))}
        </section>
      </div>
    );
}

export default ReadReviewReviewer;