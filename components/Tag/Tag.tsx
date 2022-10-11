import { TagProps } from "./Tag.props";
import { TagStyles } from "./styles";

export const Tag = ({
  size = "s",
  children,
  href,
  color = "ghost",
}: TagProps): JSX.Element => {
  switch (size) {
    case "s":
      return (
        <TagStyles className={`s ${color}`}>
          {href ? <a href={href}>{children}</a> : <>{children}</>}
        </TagStyles>
      );

    case "m":
      return (
        <TagStyles className={`s ${color}`}>
          {href ? <a href={href}>{children}</a> : <>{children}</>}
        </TagStyles>
      );

    default:
      return <></>;
  }
};
