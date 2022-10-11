import styled from "styled-components";
import { device } from "../../components/lib/styles/breakpoints";
import { HeaderStyles } from "../Header/styles";

export const SidebarStyles = styled.div`
  display: block;
  grid-area: sidebar;

  @media (max-width: 767px) {
    display: none;
  }
`;
