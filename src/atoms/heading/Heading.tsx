import "./Heading.scss";

interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<React.PropsWithChildren<IHeading>> = ({
  className = "",
  type = "h1",
  children,
  ...props
}) => {
  const HeadingType = type;
  return (
    <HeadingType className={`heading ${className}`} {...props}>
      {children}
    </HeadingType>
  );
};

export default Heading;
