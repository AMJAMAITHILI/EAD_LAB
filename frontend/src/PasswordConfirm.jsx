import React, { useState } from 'react';

export default function PasswordConfirm() {
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);//show passwd or not
  const [showConfirm, setShowConfirm] = useState(false);//passwd ok or not

  const valid = {
    length: pwd.length >= 8,
    uppercase: /[A-Z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[!@#$%^&*]/.test(pwd),
  };

  // Password is only "OK" if ALL criteria are met
  const isPasswordOK = valid.length && valid.uppercase && valid.number && valid.special;//checking for condition
  const match = pwd === confirm && confirm.length > 0;//checking if matched

  // Dynamic feedback messages for missing criteria
  const feedbackMessages = [
    !valid.length && pwd.length > 0 && 'Less than 8 characters',
    !valid.uppercase && pwd.length > 0 && 'Capital missing',
    !valid.number && pwd.length > 0 && 'Number missing',
    !valid.special && pwd.length > 0 && 'Special char missing',
  ].filter(Boolean);//removes all false values, leaving only the messages to display.

  return (
    <div>
      <div>
        <input
          type={showPwd ? 'text' : 'password'}//changes between "password" (hidden) and "text" (visible) based on showPwd.
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button type="button" onClick={() => setShowPwd(!showPwd)}>
          {showPwd ? 'Hide' : 'Show'}
        </button>
      </div>

      <div>
        <input
          type={showConfirm ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
          {showConfirm ? 'Hide' : 'Show'}
        </button>
      </div>

      <div>
        {isPasswordOK ? (
          <span style={{ color: 'green' }}>✅ Password OK</span>
        ) : (
          <span style={{ color: 'red' }}>❌ Weak password</span>
        )}
      </div>

      <div>
        {match ? (
          <span style={{ color: 'green' }}>✅ Matched</span>
        ) : (
          <span style={{ color: 'red' }}>❌ Not matching</span>
        )}
      </div>

      <div>
        {feedbackMessages.map((message, index) => (
          <div key={index}>
            <span style={{ color: 'red' }}>❌ {message}</span>
          </div>
        ))}
        {pwd.length > 0 && feedbackMessages.length === 0 && (   //condition && <JSX /> }
          <span style={{ color: 'green' }}>✅ All requirements met</span>
        )}
      </div>
    </div>
  );
}