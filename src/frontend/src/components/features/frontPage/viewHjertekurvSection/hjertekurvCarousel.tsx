// "use client";

// import { useState } from "react";
// import { createApiMediaUrl } from "@/utils/backendApiUrl";
// import Image from "next/image";
// import Button from "@/components/shared/ui/button/button";
// import useHjertekurver from "./useViewHjertekurvSection";

// import "./viewHjertekurvSection.css";

// export default function ViewHjertekurvSection() {
//   const { data, error, loading } = useHjertekurver("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!data || data.length < 3) {
//     return null;
//   }

//   const totalItems = data.length;
//   const itemsToShow = 3;

//   // Handler for going to the next set of items
//   const nextItems = () => {
//     if (currentIndex + itemsToShow < totalItems) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   // Handler for going to the previous set of items
//   const prevItems = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <>
//         <div className="view-julekurv-section-container">
//             {/* Left Arrow */}
//             {currentIndex > 0 && (
//                 <Button label="<" OnClick={() => prevItems()} />
//             )}

//             {/* Display only the three visible items */}
//             <div className="julekurv-list">
//             {data.slice(currentIndex, currentIndex + itemsToShow).map((hjertekurv, index) => (
//                 <Image
//                 key={`julekurv-frontpage-${index}-${hjertekurv.name}`}
//                 width={300}
//                 height={260}
//                 alt={hjertekurv.name}
//                 src={createApiMediaUrl(hjertekurv.imageHjertekurvUrl)}
//                 />
//             ))}
//             </div>

//             {/* Right Arrow */}
//             {currentIndex + itemsToShow < totalItems && (
//                 <Button label=">" OnClick={() => nextItems()} />
//             )}
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <Button label="Se alle kurver" href='no/hjertekurver' />
//         </div>
//     </>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { createApiMediaUrl } from "@/utils/backendApiUrl";
// import "./viewHjertekurvSection.css";
// import Image from "next/image";
// import Button from "@/components/shared/ui/button/button";
// import useHjertekurver from "./useViewHjertekurvSection";

// export default function ViewHjertekurvSection() {
//   const { data, error, loading } = useHjertekurver("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const totalItems = data?.length || 0;
//   const itemsToShow = 3;

//   const nextItems = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % totalItems);
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   const prevItems = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextItems();
//     }, 10000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [currentIndex, totalItems]);

//   return (
//     <>
//     { (loading || error) ? <div>Error</div> :
//     <div className="parent">
//       <div className="view-julekurv-section-container">
//         {/* Left Arrow */}
//         {currentIndex > 0 && (
//           <Button label="<" OnClick={() => prevItems()} />
//         )}

//         {/* Display only the three visible items */}
//         <div className="julekurv-list" style={{ transform: `translateX(-${currentIndex * (300 + 24)}px)` }}>
//           {data?.map((hjertekurv, index) => (
//             <div
//               key={`julekurv-frontpage-${index}-${hjertekurv.name}`}
//               className={`julekurv-item ${
//                 index === currentIndex ? "active" : ""
//               } ${index === currentIndex - 1 ? "blur" : ""}`}
//             >
//               <Image
//                 width={300}
//                 height={260}
//                 alt={hjertekurv.name}
//                 src={createApiMediaUrl(hjertekurv.imageHjertekurvUrl)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         {currentIndex + itemsToShow < totalItems && (
//           <Button label=">" OnClick={() => nextItems()} />
//         )}
//       </div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Button label="Se alle kurver" href="no/hjertekurver" />
//       </div></div>
//     }
//     </>
//   );
// }

/* WORK GOOD */
// "use client";

// import { useState, useEffect } from "react";
// import { createApiMediaUrl } from "@/utils/backendApiUrl";
// import Image from "next/image";
// import Button from "@/components/shared/ui/button/button";
// import useHjertekurver from "./useViewHjertekurvSection";

// import "./viewHjertekurvSection.css";

// export default function ViewHjertekurvSection() {
//   const { data, error, loading } = useHjertekurver("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex + 1 < (data?.length || 0)) {
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       } else {
//         setCurrentIndex(0); // Loop back to the first item
//       }
//     }, 6000); // Change item every 6 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [currentIndex, data?.length]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!data || data.length < 3) {
//     return null;
//   }

//   const totalItems = data.length;
//   const itemsToShow = 3;

//   // Handler for going to the next set of items manually
//   const nextItems = () => {
//     if (currentIndex + 1 < totalItems) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setCurrentIndex(0); // Loop back to the first item
//     }
//   };

//   // Handler for going to the previous set of items manually
//   const prevItems = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     } else {
//       setCurrentIndex(totalItems - itemsToShow); // Loop to the last items
//     }
//   };

//   return (
//     <>
//       <div className="view-julekurv-section-container">
//         {/* Left Arrow */}
//         {currentIndex > 0 && (
//           <Button label="<" OnClick={prevItems} />
//         )}

//         {/* Display only the three visible items with transition */}
//         <div className="julekurv-list">
//           {data.slice(currentIndex, currentIndex + itemsToShow + 1).map((hjertekurv, index) => (
//             <div
//               key={`julekurv-frontpage-${index}-${hjertekurv.name}`}
//               className={`item-container ${index === 0 ? 'slide-out' : ''}`}
//             >
//               <Image
//                 width={300}
//                 height={260}
//                 alt={hjertekurv.name}
//                 src={createApiMediaUrl(hjertekurv.imageHjertekurvUrl)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         {currentIndex + itemsToShow < totalItems && (
//           <Button label=">" OnClick={nextItems} />
//         )}
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
//         <Button label="Se alle kurver" href='no/hjertekurver' />
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Hjertekurv } from "@/app/[lang]/hjertekurver/[hjertekurv]/page";
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import DisplayHjertekurvSvgWithColors from "@/components/shared/images/displayHjertekurvSvgWithColors";
import "./hjertekurvCarousel.css";

type HjertekurvProps = {
  kurver: Hjertekurv[];
  displayTime: number;
  useFirst: boolean;
};

export default function HjertekurvCarousel({
  kurver,
  displayTime,
  useFirst,
}: HjertekurvProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kurver.length);
        setFadeState("fade-in");
      }, 750);
    }, displayTime);

    return () => clearInterval(interval);
  }, [kurver, displayTime]);

  const images = kurver.map((x) => createApiMediaUrl(x.imageHjertekurvUrl));

  const totalImages = images.length;
  const keyframes = [];

  // Create the keyframe rules
  for (let i = 0; i < totalImages; i++) {
    const percentage = ((i / totalImages) * 100) / 4;
    keyframes.push(`${percentage}% { background-image: url(${images[i]}); }`);
  }

  // Generate final keyframe rule
  const keyframeStyle = `@keyframes BgAnimation { ${keyframes.join(" ")} }`;

  const hexColors = ["#7d4d3d", "#616357"];

  const fillColor1 = hexColors[Math.floor(Math.random() * hexColors.length)];
  const fillColor2 = "white";

  return (
    <>
      {useFirst ? (
        // <div style={{ display: 'flex', backgroundColor: 'var(--tds-search-hit-bg)', padding: '48px', borderRadius: '24px' }}>
        <a
          href={`no/hjertekurver/${kurver[currentImageIndex].url}`}
          className={`image-container ${fadeState}`}
          style={{
            // width: "350px",
            // height: "350px",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            // backgroundImage: `url(${createApiMediaUrl(kurver[currentImageIndex].imageHjertekurvUrl)})`,
          }}
        >
          <DisplayHjertekurvSvgWithColors
            imageUrl={createApiMediaUrl(
              kurver[currentImageIndex].imageHjertekurvUrl,
            )}
            fillColor1={fillColor1}
            fillColor2={fillColor2}
            imageSize={{ height: "100%", width: "350px" }}
          />
        </a>
      ) : (
        // </div>
        <div>
          <style>
            {`
                .bg-slider {
                width: 350px;
                height: 350px;
                background-size: cover;
                background-position: center;
                animation: BgAnimation 200s linear infinite;
                }
    
                ${keyframeStyle}
            `}
          </style>

          <div className="bg-slider"></div>
        </div>
      )}
    </>
  );
}
