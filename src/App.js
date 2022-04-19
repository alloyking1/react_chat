import React, { useState } from 'react';
import './index.css';
import useSocket from 'use-socket.io-client';


export default () => {
  const [id, setId] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [room, setRoom] = useState("");

  const [socket] = useSocket('<https://open-chat-naostsaecf.now.sh>');

  socket.connect();
  console.log(socket);





  const handleSubmit = e => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    // setId(name);
    // socket.emit("join", name, room);
  };

  return id !== '' ? (
    <div>Hello</div>
  ) : (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          id="name"
          onChange={e => setNameInput(e.target.value.trim())}
          required
          placeholder="What is your name .."
        />
        <br />
        <input
          id="room"
          onChange={e => setRoom(e.target.value.trim())}
          placeholder="What is your room .."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};