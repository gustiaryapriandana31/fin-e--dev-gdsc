import { useState } from "react";
import { donutsDataDB } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Label from "../elements/Label";
import TextArea from "../elements/TextArea";

const Form = () => {

    const [reviewerName, setReviewerName] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState("");

    const handleReviewerNameChange = (e) => {
        setReviewerName(e.target.value);
    }

    const handleReviewContentChange = (e) => {
        setReviewContent(e.target.value);
    }
    
    const handleReviewRatingChange = (e) => {
        setReviewRating(e.target.value);
    }

    const createData = async (reviewerName, reviewContent, reviewRating) => {
      const reviewsCollection = collection(donutsDataDB, "reviewsData");
      try {
        await addDoc(reviewsCollection, {
          // Field name in Firestore : Value from the state
          reviewerName,
          reviewContent,
          reviewRating,
        }).then(() => {
          alert("Review added successfully");
          window.location.href = "/";
        });
      } catch (error) {
        console.log("Error adding review : ", error);
      }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        createData(reviewerName, reviewContent, reviewRating);
        setReviewerName("");
        setReviewContent("");
        setReviewRating("");
    };

    return (
        <form onSubmit={handleSubmitForm} className="w-1/2 p-10 mx-auto shadow-xl bg-white/10 rounded-[60px]">
            <div className="mb-3">
                <Label htmlFor="name">Your Name :</Label>
                <Input type="text" name="name" value={reviewerName} placeholder="Enter your name" onChange= {handleReviewerNameChange}/>
            </div>
            <div className="mb-3">
                <Label htmlFor="reviewer">Review :</Label>
                <TextArea name="reviewer" rows="6" placeholder="I like so much with choco donut because..." onChange={handleReviewContentChange}>{reviewContent}</TextArea>
            </div>
            <div className="mb-2">
                <Label htmlFor="rating">Rating (1-5) :</Label>
                <Input type="text" name="rating" value={reviewRating} placeholder="Just number (enable with comma)" onChange={handleReviewRatingChange}/>
            </div>
            <Button addedClassname="bg-orange-500 hover:bg-orange-700">Send Review</Button>
        </form>
    )
}

export default Form;