import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import styles from "./textarea.module.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  label: string;
  customOnChange?: (message: string) => void;
  errorMessage?: string;
  maxWidth?: number;
};

const TextArea = ({
  value,
  label,
  customOnChange,
  errorMessage,
  maxWidth = 600,
  rows = 4,
  cols = 50,
  ...rest
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState(value || "");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    if (customOnChange) {
      customOnChange(newValue);
    }
  };

  return (
    <div
      style={{ maxWidth: maxWidth || 600 }}
      className={styles.textareaContainer}
    >
      <label style={{ visibility: "hidden" }} htmlFor="custom-textarea">
        {label}
      </label>
      <textarea
        id="custom-textarea"
        rows={rows}
        cols={cols}
        className={`${styles.customTextarea} ${rest.className || ""}`}
        value={value !== undefined ? value : internalValue}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextArea;
