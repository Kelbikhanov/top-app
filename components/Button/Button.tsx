import { ButtonProps } from "./Button.props";

import { ButtonStyles, ArrowContainer } from "./styles";
import { ArrowButton } from "../icons";

export const Button = ({
  children,
  arrow = "none",
  appearance,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyles className={appearance === "primary" ? "primary" : "ghost"}>
      {children} {arrow != "none" && <ArrowContainer className={arrow === 'down' && 'down'}>
        <ArrowButton />
        </ArrowContainer>}
    </ButtonStyles>
  );
};
