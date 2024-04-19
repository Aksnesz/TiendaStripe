// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUNUuhPEXzGZ2YiVgACLMFa_NhDqZJhY",
  authDomain: "el-refugio-del-guitarrista.firebaseapp.com",
  projectId: "el-refugio-del-guitarrista",
  storageBucket: "el-refugio-del-guitarrista.appspot.com",
  messagingSenderId: "535953177496",
  appId: "1:535953177496:web:2af1a4e3b2620145f489ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);