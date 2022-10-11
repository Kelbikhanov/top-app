import { SidebarProps } from "./Sidebar.props";
import { SidebarStyles } from "./styles";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
return (
  <SidebarStyles {...props}>
    sidebar
  </SidebarStyles>
)
};
