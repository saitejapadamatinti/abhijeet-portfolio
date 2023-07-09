import React, { useEffect, useState } from 'react';

const ScrollTracker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>Scroll Position: {scrollPosition}</p>
      {/* Your component content here */}
    </div>
  );
};

export default ScrollTracker;
