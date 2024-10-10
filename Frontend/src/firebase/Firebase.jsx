
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCvF4_LBk3Sd_RCzhgPrHfEWccWmeYqb04",
  authDomain: "travel-otp-system.firebaseapp.com",
  projectId: "travel-otp-system",
  storageBucket: "travel-otp-system.appspot.com",
  messagingSenderId: "4013409414",
  appId: "1:4013409414:web:5a3753014f2865b0e07d07",
  measurementId: "G-Y1XVRMTT2X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);