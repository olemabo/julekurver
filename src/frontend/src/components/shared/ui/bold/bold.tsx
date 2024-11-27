interface BoldProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  asBlock?: boolean;
}

export default function Bold({
  children,
  asBlock = false,
  style,
  ...rest
}: BoldProps) {
  return (
    <b
      style={{
        fontFamily: "'Alegreya Sans Medium'",
        display: `${asBlock ? "block" : ""}`,
        margin: "24px 6px 12px 0",
        ...style,
      }}
      {...rest}
    >
      {children}
    </b>
  );
}
