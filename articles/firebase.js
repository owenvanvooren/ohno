import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";

// Firebase Configuration yay :)
const firebaseConfig = {
    apiKey: "AIzaSyC_YxlCltDHaRu41h2C4tOdqs_A-SJK5hE",
    authDomain: "ohno-blog.firebaseapp.com",
    projectId: "ohno-blog",
    storageBucket: "ohno-blog.firebasestorage.app",
    messagingSenderId: "247568847447",
    appId: "1:247568847447:web:bbbf8432b34a0a4af44912",
    measurementId: "G-3C61KNVM6K"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);