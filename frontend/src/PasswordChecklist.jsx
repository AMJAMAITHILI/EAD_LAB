import React, { useState } from 'react';

export default function PasswordChecklist() {
  const [pwd, setPwd] = useState('');

  const checks = {
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[^A-Za-z0-9]/.test(pwd),
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <input
        type="password"
        value={pwd}
        onChange={e => setPwd(e.target.value)}
        placeholder="Enter password"
      />
      <ul>
        <li style={{ color: checks.length ? 'green' : 'red' }}>Minimum 8 characters</li>
        <li style={{ color: checks.uppercase ? 'green' : 'red' }}>At least one uppercase letter</li>
        <li style={{ color: checks.number ? 'green' : 'red' }}>At least one number</li>
        <li style={{ color: checks.special ? 'green' : 'red' }}>At least one special character</li>
      </ul>
    </div>
  );
}
