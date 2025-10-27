// GreetApp.jsx
import React, { useState } from "react";

export default function GreetApp() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = async (e) => {
    e.preventDefault();
    if (!name) return setGreeting("Please enter a name");

    const url = `http://localhost:4000/greet/${name}${title ? `?title=${title}` : ""}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setGreeting(data.greeting || data.error);
    } catch {
      setGreeting("Error connecting to server");
    }
  };

  return (
    <div>
      <h3>Greet App</h3>
      <form onSubmit={handleGreet}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
        />
        <br />
        <button type="submit">Greet</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}
