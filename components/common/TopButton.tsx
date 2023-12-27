'use client';
import { useState, useEffect } from 'react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    setIsVisible(currentIsVisible => {
      if (!currentIsVisible && window.pageYOffset > 400) {
        return true;
      } else if (currentIsVisible && window.pageYOffset <= 400) {
        return false;
      }
      return currentIsVisible;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return isVisible ? (
    <button
      className="sticky"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      맨 위로
    </button>
  ) : null;
};

export default TopButton;
