import styled from "styled-components";

export const TagStyles = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 20px;
  padding: 5px 12px;

  &.s {
    font-size: 12px;
    line-height: 12px;
  }

  &.m {
    font-size: 14px;
    line-height: 14px;
  }

  &.ghost {
    border: 1px solid var(--gray);
  }

  &.red {
    color: var(--white);
    background: #DE0000;

    font-weight: bold;
  }

  &.gray {
    color: var(--green);
    background: var(--green-light);

    font-weight: bold;
  }

  &.primary {
    color: var(--primary);
    border: 1px solid var(--primary);

    font-weight: bold;
  }
`;
