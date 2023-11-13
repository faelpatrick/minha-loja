import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Message } from "../../models/Messages";
import "./Messages.css";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [mainMsg, setMainMsg] = useState<Message>({} as Message);

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
      setMainMsg(messagesList[0]);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Mensagens Recebidas</h1>
      <div className="gridMsgList">
        
        <div className="gridLeft">
          <ul className="container-msg">
            {messages.map((message) => (
              <li key={message.id} onClick={() => setMainMsg(message)}>
                {" "}
                <p>
                  <strong>Nome:</strong> {message.name}
                </p>
                <p>
                  <strong>Email:</strong> {message.email}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gridRight mainMsg">
          <p>
            <strong>Nome:</strong> {mainMsg.name}
          </p>
          <p>
            <strong>Email:</strong> {mainMsg.email}
          </p>
          <p>
            <strong>Mensagem:</strong> {mainMsg.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
