import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [errMsg ,setErrMsg] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setValidUser(true);
      setErrMsg(false);
    } else {
      setValidUser(false);
      setErrMsg(true);
    }
  }

  return (
    <div className="App">
      {validUser ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          {errMsg && <p >Invalid username or password</p>}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              gap: "6px",
            }}
          >
            <h1>Login Page</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
