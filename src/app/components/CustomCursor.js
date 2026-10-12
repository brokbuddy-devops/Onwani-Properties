'use client';

import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHoveringProperty, setIsHoveringProperty] = useState(false);
  const dot = useRef(null);
  
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let animationFrameId;
    
    const updatePos = () => {
      // Smooth lerp for trailing effect (lower value = more delay)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.06;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.06;
      
      if (dot.current) {
        dot.current.style.left = `${currentPos.current.x}px`;
        dot.current.style.top = `${currentPos.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(updatePos);
    };
    
    updatePos();

    const onMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      const target = e.target;
      if (target.closest('.property-image-wrapper') || target.closest('.center-img')) {
        setIsHoveringProperty(true);
      } else {
        setIsHoveringProperty(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={dot}
      className={`custom-cursor ${isHoveringProperty ? 'hover-property' : ''}`}
    >
      {isHoveringProperty && <span className="cursor-text">View Details</span>}
    </div>
  );
}
