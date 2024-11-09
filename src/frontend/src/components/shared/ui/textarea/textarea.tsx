import { ChangeEvent, useState } from "react";
import "./textarea.css";

type TextAreaProps = {
  value: string;
  rows?: number;
  cols?: number;
  onChange?: (message: string) => void;
  maxLength?: number;
  placeholder?: string;
  maxWidth?: number;
  errorMessage?: string;
};

const TextArea = ({
  value,
  placeholder = "Enter text here...",
  rows = 4,
  maxWidth = 600,
  cols = 50,
  onChange,
  maxLength,
  errorMessage,
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState(value || "");

  // Handle change event
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div style={{ maxWidth: maxWidth }} className="textarea-container">
      <textarea
        className="custom-textarea"
        value={value !== undefined ? value : internalValue}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        onChange={(e) => handleChange(e)}
      />
      {/* Conditional rendering for error message */}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
