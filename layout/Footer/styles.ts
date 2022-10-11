import styled from "styled-components";

export const FooterStyles = styled.footer`
    grid-area: footer;
    background: var(--primary);
    padding: 25px 30px;
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px 40px;
    color: var(--white);
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;