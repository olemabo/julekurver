type PageWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  isStandardPage?: boolean;
  withBottomMargin?: boolean;
};

export default function PageWrapper({
  children,
  withBottomMargin = true,
  isStandardPage = false,
  style,
  className,
  ...rest
}: PageWrapperProps) {
  return (
    <div className="container">
      <div
        style={{
          marginBottom: withBottomMargin ? "64px" : undefined,
          ...style,
        }}
        className={`${className ?? ""} ${isStandardPage ? "standard-page" : ""}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
