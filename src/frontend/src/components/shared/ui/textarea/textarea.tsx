import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import "./textarea.scss";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  customOnChange?: (message: string) => void;
  errorMessage?: string;
  maxWidth?: number;
};

const TextArea = ({
  value,
  customOnChange,
  errorMessage,
  maxWidth = 600,
  rows = 4,
  cols = 50,
  ...rest
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState(value || "");

  // Handle change event
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    if (customOnChange) {
      customOnChange(newValue);
    }
  };

  return (
    <div style={{ maxWidth: maxWidth || 600 }} className="textarea-container">
      <textarea
        rows={rows}
        cols={cols}
        className={`custom-textarea ${rest.className || ""}`}
        value={value !== undefined ? value : internalValue}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
