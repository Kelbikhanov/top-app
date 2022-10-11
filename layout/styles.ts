import styled from "styled-components";

export const WrapperLayout = styled.div`
  display: grid;
  grid-template-columns: auto 230px minmax(320px, 1200px) auto;
  min-height: 100vh;
  gap: 0 30px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
  ". header header ."
  ". sidebar body ."
  "footer footer footer footer";


  @media (max-width: 767px) {
    grid-template-columns: minmax(320px, 1fr);
    grid-template-areas:
      "header"
      "bodу"
      "footer";
  }
`;
