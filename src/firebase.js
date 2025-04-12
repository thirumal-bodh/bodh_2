// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1K1-E3vfgtAnMNizkbA8InsDYrhqSs2M",
  authDomain: "bodh-2.firebaseapp.com",
  projectId: "bodh-2",
  storageBucket: "bodh-2.firebasestorage.app",
  messagingSenderId: "775338385964",
  appId: "1:775338385964:web:1af9381fff284acd41e789",
  measurementId: "G-4XH2JGZ6QQ"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
