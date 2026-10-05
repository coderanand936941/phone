
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// ==========================================
// 🔥 PASTE YOUR FIREBASE CONFIG HERE
// ==========================================

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcZbBLCr5kJxAyrlIKxqCkHuIGMVGbn0Q",
  authDomain: "phone-916c3.firebaseapp.com",
  projectId: "phone-916c3",
  storageBucket: "phone-916c3.firebasestorage.app",
  messagingSenderId: "147458670282",
  appId: "1:147458670282:web:1b5e2db7328bec35ad3e33",
  measurementId: "G-RN2LJGZC71"
};

// ==========================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.useDeviceLanguage();

export {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber
};
