import { format } from 'date-fns'

import { FooterProps } from "./Footer.props";
import { FooterStyles, FooterContent } from "./styles";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
return (
  <FooterStyles {...props}>
    <FooterContent>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
      <a href='#' target='_blank'>Политика конфиденциальности</a>
    </FooterContent>
  </FooterStyles>
)
};
