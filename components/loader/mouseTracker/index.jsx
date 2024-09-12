"use client";

import { useEffect, useRef, useState } from "react";
import "./style.css";

const FollowMouse = ({ unmount }) => {
  const circleRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 500, y: 210 });
  const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });
  let currentScale = 0;
  let currentAngle = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    const deltaMouseX = mouse.x - previousMouse.x;
    const deltaMouseY = mouse.y - previousMouse.y;
    setPreviousMouse({ x: mouse.x, y: mouse.y });
    const mouseVelocity = Math.min(
      Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
      150
    );
    const scaleValue = (mouseVelocity / 150) * 0.5;
    currentScale += (scaleValue - currentScale) * 0.17;

    const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
    if (mouseVelocity > 20) {
      currentAngle = angle;
    }

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
    const rotateTransform = `rotate(${currentAngle}deg)`;

    if (circleRef.current) {
      circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      window.requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    if (!unmount) {
      tick();
    }
  }, [mouse, tick, unmount]);

  return (
    <div
      ref={circleRef}
      style={{
        top: mouse.y,
        left: mouse.x,
      }}
      className="glow"
    />
  );
};

export default FollowMouse;
