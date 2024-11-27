"use client";

import React, { useState, useEffect } from "react";

type CountDownProps = {
  targetDate: string;
};

export const Countdown = ({ targetDate }: CountDownProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  console.log(targetDate, "targetDate");
  useEffect(() => {
    console.log("first");
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  function calculateTimeLeft() {
    console.log("HHE");
    const target = new Date(targetDate); // Parse the targetDate
    const now = new Date();

    const difference = target.getTime() - now.getTime(); // Ensure number arithmetic

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <h1>Countdown to {new Date(targetDate).toLocaleString()}</h1>
      <div>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    </div>
  );
};
