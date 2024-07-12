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
        <form onSubmit={handleSubmitForm} className="w-3/5 p-10 mx-auto">
            <div className="">
                <Label htmlFor="name">Nama Anda :</Label>
                <Input type="text" name="name" value={reviewerName} placeholder="Masukkan Nama Anda" onChange= {handleReviewerNameChange}/>
            </div>
            <div className="">
                <Label htmlFor="reviewer">Review Anda :</Label>
                <TextArea name="reviewer" rows="10" placeholder="Saya sangat menyukai donat rasa ..." onChange={handleReviewContentChange}>{reviewContent}</TextArea>
            </div>
            <div className="">
                <Label htmlFor="rating">Rating Anda (1-5) :</Label>
                <Input type="text" name="rating" value={reviewRating} placeholder="Hanya angka (boleh pakai koma)" onChange={handleReviewRatingChange}/>
            </div>
            <Button addedClassname="bg-blue-500 hover:bg-blue-700">Send Review</Button>
        </form>
    )
}

export default Form;