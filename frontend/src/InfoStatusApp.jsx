import React, { useState } from "react";

export default function InfoStatusApp() {
  const [info, setInfo] = useState(null);
  const [status, setStatus] = useState(null);

  const getInfo = async () => {
    const res = await fetch("http://localhost:4000/info");
    const data = await res.json();
    setInfo(data);
  };

  const getStatus = async () => {
    const res = await fetch("http://localhost:4000/status");
    const data = await res.json();
    setStatus(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Server Information</h2>
      <button onClick={getInfo}>Get Info</button>
      {info && <pre>{JSON.stringify(info, null, 2)}</pre>}

      <h2>Server Status</h2>
      <button onClick={getStatus}>Get Status</button>
      {status && <pre>{JSON.stringify(status, null, 2)}</pre>}
    </div>
  );
}
