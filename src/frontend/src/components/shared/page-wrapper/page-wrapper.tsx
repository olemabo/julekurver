import styles from "./page-wrapper.module.css";

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
        className={`${className ?? ""} ${isStandardPage ? styles.standardPage : ""}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
