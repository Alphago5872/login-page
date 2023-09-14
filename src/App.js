import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    console.log("login in...")
  }

  return (
    <div className="App">
      <div className="backdrop"></div>
      <div className="content">
        <h1>Reddit clone</h1>
        <p>Username</p>
        <input
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          // placeholder="Username"
        ></input>
        <p>Password</p>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          // placeholder="Password"
        ></input>
        <button onClick={loginHandler}>LOGIN</button>
      </div>
    </div>
  );
}

export default App;
