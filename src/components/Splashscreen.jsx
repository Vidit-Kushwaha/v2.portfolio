import React, { useState, useEffect } from 'react';

const Splashscreen = () => {

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setFadeOut(true);
    }, 3500);
  }, []);

  return (
    <div className='bg-primary'>
      <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        <iframe src="https://embed.lottiefiles.com/animation/63487"></iframe>
      </div>
    </div>

  );
};


export default Splashscreen;

