"use client";

import "./button.css";

type ButtonProps = {
  label: string;
  href?: string;
};

export default function Button({ label, href }: ButtonProps) {
  if (!label) {
    return null;
  }

  const handleDownload = () => {
    if (href) {
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "file.svg"); // Set the desired file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up after click
    }
  };

  if (href) {
    return (
      <button type="button" onClick={handleDownload} className="button-link">
        {label}
      </button>
    );
  }

  return <button type="button">{label}</button>;
}
