import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.2s;

  &.primary {
    color: var(--white);
    background-color: var(--primary);

    &:hover {
      background-color: var(--primary-hover);
    }
  }

  &.primary svg,
  &.ghost:hover svg {
    fill: var(--white);
  }

  &.ghost {
    color: var(--black);
    background-color: none;
    border: 1px solid var(--gray);

    &:hover {
      color: var(--white);
      background-color: var(--primary-hover);
    }
  }
`;

export const ArrowContainer = styled.span`
  display: inline-block;
  margin-left: 10px;

  &.down {
    transform: rotate(90deg);
    transition: all 0.2s;
  }
`;