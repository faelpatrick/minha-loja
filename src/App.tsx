import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopMenu from './views/Topmenu/Topmenu';
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Products from "./views/Products/Products";
import "./App.css";

// src/firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <TopMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
