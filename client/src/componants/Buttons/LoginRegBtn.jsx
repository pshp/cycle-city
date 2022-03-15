import React from 'react';
import './LoginRegBtn.css';

export default function LoginRegBtn({ type }) {
  const text = type === 'login' ? 'Log In' : 'Sign Up';
  const className = `btn-small ${type}-btn-small`;

  return (
    <div className={className}>{text}</div>
  );
}
