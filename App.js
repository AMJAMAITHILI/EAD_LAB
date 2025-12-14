/*import { useState } from 'react';

function App() {
  const [output, setOutput] = useState('');

  function getUsers() {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setOutput(JSON.stringify(data)));
  }

  function getProfile() {
    fetch('/api/user/profile')
      .then(res => res.json())
      .then(data => setOutput(JSON.stringify(data)));
  }

  return (
    <div>
      <h1>Simple Routing Example</h1>
      <button onClick={getUsers}>Get Users</button>
      <button onClick={getProfile}>Get Profile</button>
      <div>{output}</div>
    </div>
  );
}

export default App;
*/
/*
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  function login() {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setResult("Login success! Token saved.");
        } else {
          setResult(data.message);
        }
      });
  }

  function getProfile() {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/profile", {
      headers: { "Authorization": token }
    })
      .then(res => res.json())
      .then(data => setResult(JSON.stringify(data)));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>JWT Auth</h2>
      <input placeholder="username" onChange={e => setUsername(e.target.value)} />
      <br />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={login}>Login</button>
      <button onClick={getProfile}>Get Profile</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
*/
/*
import { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ close }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "120px",
        border: "1px solid black",
        background: "white",
        textAlign: "center"
      }}
    >
      <p>Modal</p>
      <button onClick={close}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <Modal close={() => setOpen(false)} />}
    </div>
  );
}
*/
/*
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
  students: [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
  ]
};

function reducer(state = initialState, action) {
  if (action.type === "SORT_ASC") {
    return { students: [...state.students].sort((a, b) => a.marks - b.marks) };
  }
  if (action.type === "SORT_DESC") {
    return { students: [...state.students].sort((a, b) => b.marks - a.marks) };
  }
  return state;
}

const store = createStore(reducer);

function Students() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Students</h2>
      <button onClick={() => dispatch({ type: "SORT_ASC" })}>Ascending</button>
      <button onClick={() => dispatch({ type: "SORT_DESC" })}>Descending</button>
      <ul>
        {students.map((s, i) => <li key={i}>{s.name} - {s.marks}</li>)}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Students />
    </Provider>
  );
}
*/
/*
import { useState } from 'react';

export default function App() {
  const [pwd, setPwd] = useState('');
  
  const length = pwd.length >= 8;
  const uppercase = /[A-Z]/.test(pwd);
  const number = /[0-9]/.test(pwd);
  const special = /[^A-Za-z0-9]/.test(pwd);
  
  const score = [length, uppercase, number, special].filter(Boolean).length;
  const strength = score <= 2 ? 'Weak' : score === 3 ? 'Medium' : 'Strong';
  const color = strength === 'Weak' ? 'red' : strength === 'Medium' ? 'orange' : 'green';
  
  return (
    <div>
      <h2>Password Validator</h2>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Enter password"
        style={{ border: `2px solid ${color}` }}
      />
      <p style={{ color }}>Strength: {strength}</p>
    </div>
  );
}
*/
/*
import {useState} from 'react';
export default function App(){
const [msg,setMsg]=useState('');
function login(u,p){
setMsg(u==='admin'&&p==='123'?'Success':'Error');
}
return (
<div>
<input id="u" />
<input id="p" type="password" />
<button onClick={()=>login(u.value,p.value)}>Login</button>
<p>{msg}</p>
</div>
);
}
*/
/*
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // runs every time count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
*/

import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('');

  function getHome() {
    fetch('http://localhost:3000/')
      .then(res => res.text())
      .then(data => setResult(data));
  }

  function getAbout() {
    fetch('http://localhost:3000/about')
      .then(res => res.text())
      .then(data => setResult(data));
  }

  return (
    <div>
      <h2>Middleware Demo</h2>
      <button onClick={getHome}>Home</button>
      <button onClick={getAbout}>About</button>
      <p>{result}</p>
    </div>
  );
}