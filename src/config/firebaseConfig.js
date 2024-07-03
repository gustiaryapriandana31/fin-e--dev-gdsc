// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk43eMUEzfq_S_53lcsUSf0XNbfiWVOhQ",
  authDomain: "donutsdata.firebaseapp.com",
  projectId: "donutsdata",
  storageBucket: "donutsdata.appspot.com",
  messagingSenderId: "553386120343",
  appId: "1:553386120343:web:71b898c0378a647fae05d2",
  measurementId: "G-QL58WSRJQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const storage = getStorage();
