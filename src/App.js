// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './index.css';

export default () => {
  const [id, setId] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(name);
    socket.emit("join", name, room);
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