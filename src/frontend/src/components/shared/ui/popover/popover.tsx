"use client";

import React, { useState, useRef, useEffect } from "react";
import "./popover.scss";
import Heading from "../heading/heading";

type PopoverProps = {
  content: React.ReactNode; // Accept React nodes as content
  children: React.ReactNode;
  title?: string;
};

const Popover = ({ title, content, children }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isVisible && buttonRef.current && popoverRef.current) {
      // Calculate position based on the button position
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const popoverWidth = 350; // Adjust as needed

      let leftPosition =
        buttonRect.left + buttonRect.width / 2 - popoverWidth / 2;
      const topPosition = buttonRect.bottom + window.scrollY + 10; // Adjust spacing

      // Ensure the popover stays within viewport bounds
      if (leftPosition < 0) {
        leftPosition = 0;
      } else if (leftPosition + popoverWidth > viewportWidth) {
        leftPosition = viewportWidth - popoverWidth;
      }

      // Apply styles directly to the popover
      popoverRef.current.style.position = "absolute";
      popoverRef.current.style.top = `${topPosition}px`;
      popoverRef.current.style.left = `${leftPosition}px`;
      popoverRef.current.style.width = `${popoverWidth}px`;
    }
  }, [isVisible]);

  return (
    <span className="popover-container">
      <button
        className="popover-button"
        onClick={togglePopover}
        ref={buttonRef}
      >
        {children}
        <img
          className="popover-icon"
          src="/images/icons/popover_questionmark.svg"
          alt="Question mark icon"
        />
      </button>
      {isVisible && (
        <div className="popover-content" ref={popoverRef}>
          {title && <Heading headingLevel="h2">{title}</Heading>}
          {content}
        </div>
      )}
    </span>
  );
};

export default Popover;
