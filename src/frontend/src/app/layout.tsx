"use client";

import HjertekurvLoader from "@/components/shared/loaders/hjertekurvLoader";
import "./globals.css";

// import { Countdown } from "@/components/features/countdown";
// import { useEffect, useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // const useLocaleMiddleware = process.env.USE_LOCALE_MIDDLEWARE === "true";
  // const targetDate = "2024-12-12";

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  //   useEffect(() => {
  //       const timer = setInterval(() => {
  //       setTimeLeft(calculateTimeLeft());
  //       }, 1000);

  //       return () => clearInterval(timer); // Cleanup on component unmount
  //   }, [targetDate]);

  //   function calculateTimeLeft() {
  //     const target = new Date(targetDate); // Parse the targetDate
  //     const now = new Date();

  //     const difference = target.getTime() - now.getTime(); // Ensure number arithmetic

  //     if (difference <= 0) {
  //       return {
  //         days: 0,
  //         hours: 0,
  //         minutes: 0,
  //         seconds: 0,
  //       };
  //     }

  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //     const minutes = Math.floor((difference / (1000 * 60)) % 60);
  //     const seconds = Math.floor((difference / 1000) % 60);

  //     return { days, hours, minutes, seconds };
  //   }

  // if (useLocaleMiddleware) {
  //   return <html lang={"no"}>
  //       <body>
  //         <main className="container">
  //         </main>
  //       </body>
  //     </html>
  // }
  const isVisible = process.env.NEXT_PUBLIC_IS_VISIBLE === "true";

  if (!isVisible) {
    return (
      <html>
        <body>
          <div style={{ height: "500px" }}>
            <HjertekurvLoader />
          </div>
        </body>
      </html>
    );
  }
  return children;
};

export default RootLayout;
