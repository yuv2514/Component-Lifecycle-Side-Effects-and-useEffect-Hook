import React, { useEffect } from 'react';

const TimerSubscriptionComponent = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer fired!');
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Timer Subscription Component</div>;
};

export default TimerSubscriptionComponent;

import React, { useEffect } from 'react';

const DocumentEventSubscriptionComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event detected!');
    };

    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Document Event Subscription Component</div>;
};

export default DocumentEventSubscriptionComponent;
