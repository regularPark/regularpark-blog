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

  return <button onClick={handleToggle}>{darkMode ? '☀️' : '🌙'}</button>;
}
