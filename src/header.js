import React from "react";

import {  FaSignOutAlt } from "react-icons/fa";
// import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="wide" light expand="md" fixed="top">
        <NavbarBrand href="/">CPO Monitoring</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink  href="/"> {<FaSignOutAlt />} SignOut</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem> */}
        </Nav>
        {/* <NavbarText>
        <NavLink  href="/"> {<FaSignOutAlt />} Logout</NavLink>
        {/* <MenuItem onClick={() => history.push('/dataIndustry')} icon={<FaIndustry />}>Factory</MenuItem> */}
        {/* </NavbarText> */}
      </Navbar>
    </div>
  );
};

export default Header;
