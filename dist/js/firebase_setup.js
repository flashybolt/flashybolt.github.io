import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASk-omRhk6-1sX6ON7eE_A-2Aylkp3rmQ",
  authDomain: "autobio-e280d.firebaseapp.com",
  databaseURL: "https://autobio-e280d-default-rtdb.firebaseio.com",
  projectId: "autobio-e280d",
  storageBucket: "autobio-e280d.appspot.com",
  messagingSenderId: "584668968448",
  appId: "1:584668968448:web:0761136c18342e19bdcae5",
  measurementId: "G-YMQ3RB9GGQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);