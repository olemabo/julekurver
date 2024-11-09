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
import { createApiMediaUrl } from "@/utils/backendApiUrl";
import Image from "next/image";
import Button from "@/components/shared/ui/button/button";
import useHjertekurver from "./useViewHjertekurvSection";

import "./viewHjertekurvSection.css";

export default function ViewHjertekurvSection() {
  const { data, error, loading } = useHjertekurver("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0); // Position for scrolling

  useEffect(() => {
    const totalItems = data?.length || 0;
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % totalItems); // Increment scroll position
      setCurrentIndex((prev) => (prev + 1) % totalItems); // Update index for manual controls
    }, 4000000); // Change item every 6 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data]);

  useEffect(() => {
    // Update the transform property to scroll
    if (data) {
      const width = 324; // Width of each item
      setScrollPosition(currentIndex * width); // Calculate the new scroll position
    }
  }, [currentIndex, data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || data.length < 3) {
    return null;
  }

  return (
    <>
      <div className="view-container">
        {/* <Button label="<" OnClick={() => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)} /> */}
        <div className="view-julekurv-section-container">
          {/* Display all items with a scroll effect */}
          <div
            className="julekurv-list"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {data.map((hjertekurv, index) => {
              const isVisible =
                index === currentIndex ||
                index === (currentIndex + 1) % data.length; // Determine if the item is visible
              const isPartiallyVisible =
                index === (currentIndex - 1 + data.length) % data.length; // Previous item (may be partially visible)

              return (
                <a
                  href={`no/hjertekurver/${hjertekurv.url}`}
                  key={`julekurv-frontpage-${index}-${hjertekurv.name}`}
                  className={`item-container ${!isVisible ? (isPartiallyVisible ? "blur" : "") : ""}`}
                >
                  <Image
                    width={300}
                    height={260}
                    alt={hjertekurv.name}
                    src={createApiMediaUrl(hjertekurv.imageHjertekurvUrl)}
                  />
                </a>
              );
            })}
          </div>
        </div>
        {/* <Button label=">" OnClick={() => setCurrentIndex((prev) => (prev + 1) % data.length)} /> */}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}
      >
        <Button label="Se alle kurver" href="no/hjertekurver" />
      </div>
    </>
  );
}
