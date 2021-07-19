import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import './chat.css';
import InfoBar from '../InfoBar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messagaes/Messages';
import TextContaiiner from '../TextContainer/TextContainer';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [users,setUsers] = useState('');

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    socket.on("roomData",({users}) => {
      setUsers(users);
    })
  }, [messages]);

  //function for sending message
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />

        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
       
      </div>
      <TextContaiiner users={users} room={room} />
    </div>
  );
};

export default Chat;
