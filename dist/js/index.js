import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGRmIoaOQN7HefDo_9AOsEXa6d5-vGDa4",
  authDomain: "flashybolty.firebaseapp.com",
  projectId: "flashybolty",
  storageBucket: "flashybolty.appspot.com",
  messagingSenderId: "1014198555810",
  appId: "1:1014198555810:web:eb86d245256911099273fb",
  measurementId: "G-MC8JHQPEL5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);