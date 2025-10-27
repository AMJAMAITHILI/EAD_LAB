import React, { useState } from 'react';


const VALID = { username: 'admin', password: 'P@ssw0rd' };


export default function LoginForm(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [msg, setMsg] = useState(null);


const submit = (e) => {
e.preventDefault();
if (username === VALID.username && password === VALID.password) setMsg({ type: 'success', text: 'Login successful' });
else setMsg({ type: 'error', text: 'Invalid credentials' });
};


return (
<form onSubmit={submit}>
<input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" />
<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
<button type="submit">Login</button>
{msg && <div style={{ color: msg.type === 'success' ? 'green' : 'red' }}>{msg.text}</div>}
</form>
);
}