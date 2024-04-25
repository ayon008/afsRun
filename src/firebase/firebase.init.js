// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxaIo7Y65Bpdc-IqnPrdZKY0Ilo51GrOs",
    authDomain: "afs-run.firebaseapp.com",
    projectId: "afs-run",
    storageBucket: "afs-run.appspot.com",
    messagingSenderId: "625689061834",
    appId: "1:625689061834:web:4e7959b045d281160c4733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;