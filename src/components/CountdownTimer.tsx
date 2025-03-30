"use client";
import { useState, useEffect } from "react";

function CountdownTimer() {
  const initialTime = 8 * 60 * 60;
  const [timeLeft, setTImeLeft] = useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTImeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toPersianDigits = (num: number | string): string =>
    num.toString().replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className=" flex mx-auto items-center justify-center text-center text-white text-2xl">
      {toPersianDigits(formatTime(timeLeft))}
      <img className="h-5 mr-6 " src="/images/clock.svg" alt="clock" />
    </div>
  );
}

export default CountdownTimer;
