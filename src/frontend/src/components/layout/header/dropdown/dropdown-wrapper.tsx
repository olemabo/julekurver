import styles from "./dropdown-wrapper.module.css";

type DropdownWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  isActive: boolean;
};

export default function DropdownWrapper({
  children,
  isActive,
  ...props
}: DropdownWrapperProps) {
  return (
    <div
      className={`${styles.dropdownContainer} ${isActive ? styles.open : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
