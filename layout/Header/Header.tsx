import { HeaderProps } from "./Header.props";
import { HeaderStyles } from "./styles";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
return (
  <HeaderStyles {...props}>
    header
  </HeaderStyles>
)
};
