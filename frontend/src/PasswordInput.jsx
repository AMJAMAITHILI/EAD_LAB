import React, { useState } from 'react';

export default function PasswordInput() {
  const [pwd, setPwd] = useState('');

  const rules = {
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[^A-Za-z0-9]/.test(pwd),
  };

  const score = Object.values(rules).filter(Boolean).length;
  const strength = score <= 2 ? 'Weak' : score === 3 ? 'Medium' : 'Strong';

  const borderColor =
    strength === 'Weak'
      ? "red"   
      : strength === 'Medium'
      ? "orange"  
      : "green";  
  return (
    <div>
      <label>Password</label>

      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        style={{
          display: 'block',
          width: '30%',
          padding: '10px',
          border: `2px solid ${borderColor}`,
          borderRadius: 6,
          outline: 'none',
          fontSize: 15,
        }}
      />

      <div>
        Strength: <strong style={{ color: borderColor }}>{strength}</strong>
      </div>
    </div>
  );
}
