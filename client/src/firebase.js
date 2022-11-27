import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSzQ5DVI9zYc_dkTTqjvSCHj0ceT1zgi0",
  authDomain: "video-d1c77.firebaseapp.com",
  projectId: "video-d1c77",
  storageBucket: "video-d1c77.appspot.com",
  messagingSenderId: "543283796628",
  appId: "1:543283796628:web:e01458e1d2fccc1fd4f281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;