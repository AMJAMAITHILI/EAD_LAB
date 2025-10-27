import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setMsg(data.message || data.error);
  };

  return (
    <div>
      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        <label>Username</label><br/>
        <input value={username} onChange={(e) => setUsername(e.target.value)} /><br/><br/>

        <label>Password</label><br/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>

        <button type="submit">Register</button>
      </form>

      <p>{msg}</p>
      <button type="button" onClick={async () => {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();
  console.log(data); // just to see users in console
}}>
  Show Users in Console
</button>
    </div>
  );
}
