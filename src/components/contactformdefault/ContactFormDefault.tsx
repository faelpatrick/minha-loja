import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";


// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
        createdAt: new Date(),
      });
      alert("Mensagem enviada com sucesso!");
      // Limpar o formulário
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar a mensagem: ", error);
      alert("Erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Sua mensagem" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
