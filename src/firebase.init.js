import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAGjdSBjDTSsf0EcVZn-B1DbM1-87K84yU",
    authDomain: "warehouse-manage-02.firebaseapp.com",
    projectId: "warehouse-manage-02",
    storageBucket: "warehouse-manage-02.appspot.com",
    messagingSenderId: "969868104947",
    appId: "1:969868104947:web:4d5fd839aee84365c45386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;