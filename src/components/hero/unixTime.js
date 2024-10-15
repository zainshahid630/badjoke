import React, { useEffect, useState } from 'react';

const MyComponent = ({ unixTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Initialize the time left when the component mounts
    const calculateTimeLeft = () => {
      const totalSeconds = unixTime;
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds = prevTime.days * 86400 + prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

        if (totalSeconds > 0) {
          const newTotalSeconds = totalSeconds - 1;
          const days = Math.floor(newTotalSeconds / (60 * 60 * 24));
          const hours = Math.floor((newTotalSeconds % (60 * 60 * 24)) / (60 * 60));
          const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
          const seconds = newTotalSeconds % 60;

          return { days, hours, minutes, seconds };
        } else {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [unixTime]); // Depend on unixTime

  return (
    <div style={{ display: 'flex', gap: '10px' , placeContent:'center' , fontSize: '28px', fontWeight: 'bold' }}>
    <div>{timeLeft.days}d</div>
    <div>{timeLeft.hours}h</div>
    <div>{timeLeft.minutes}m</div>
    <div>{timeLeft.seconds}s</div>
  </div>
  );
};

export default MyComponent;
