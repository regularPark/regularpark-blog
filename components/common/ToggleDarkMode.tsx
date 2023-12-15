'use client';
import { useState, useEffect } from 'react';

export default function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M11 3V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v1q0 .425-.288.713T12 4q-.425 0-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20q.425 0 .713.288T13 21v1q0 .425-.288.713T12 23q-.425 0-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12q0-.425.288-.712T21 11h1q.425 0 .713.288T23 12q0 .425-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h1q.425 0 .713.288T4 12q0 .425-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3q.3.3.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3q-.3-.3-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725q-.3.3-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725q.3-.3.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#22333b"
            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-4q.675 0 1.3-.125t1.2-.4q-1.575-.725-2.538-2.175T11 12q0-1.85.963-3.3T14.5 6.525q-.575-.275-1.2-.4T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z"
          />
        </svg>
      )}
    </button>
  );
}
