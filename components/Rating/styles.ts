import styled from "styled-components";
import { Star } from "../icons";

type StarSvgProps = {
  isEditable: boolean;
};

export const StarSvg = styled(Star)<StarSvgProps>`
  margin-right: 5px;
  cursor: ${(props) => (props.isEditable ? 'pointer' : 'default')};

  &.filled {
    fill: var(--primary);
  }
`;