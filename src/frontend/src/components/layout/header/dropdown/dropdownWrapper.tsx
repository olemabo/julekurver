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
    <div className={`dropdown-container ${isActive ? "open" : ""}`} {...props}>
      {children}
    </div>
  );
}
