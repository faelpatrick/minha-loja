import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Message } from "../../models/Messages";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const db = getFirestore();
      const messagesCollection = collection(db, "contacts");
      const messagesSnapshot = await getDocs(messagesCollection);
      const messagesList = messagesSnapshot.docs.map((doc) => {
        const data = doc.data() as Message;
        return {
          docId: doc.id,
          ...data,
        };
      });
      setMessages(messagesList);
    };

    fetchMessages();
  }, []);

  return (
    <div >
      <h1>Mensagens Recebidas</h1>
      <ul className="container-msg">
        {messages.map((message) => (
          <li key={message.id}>
            {" "}
            {/* Atualizado para usar 'docId' */}
            <p>
              <strong>Nome:</strong> {message.name}
            </p>
            <p>
              <strong>Email:</strong> {message.email}
            </p>
            <p>
              <strong>Mensagem:</strong> {message.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
