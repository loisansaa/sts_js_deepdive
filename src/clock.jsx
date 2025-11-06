import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    setTheme(hour >= 6 && hour < 18 ? 'light' : 'dark');

  }, [time]);

  return (
    <div
      className={`flex flex-col items-center justify-center p-10 rounded-2xl shadow-lg 
        ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}
    >
      <h1 className="text-5xl font-bold mb-2">{time.toLocaleTimeString()}</h1>
      <p className="text-lg capitalize">Current theme: {theme}</p>
    </div>
  );
};

export default Clock;//Exporting Clock component
