import React from "react";
import styled from "styled-components";

const Div = styled.div`
`;

const NavbarBg = ({ className=''}) => {
  className+=" navbar-bg";
  return (<Div className={className}></Div>);
}

export default NavbarBg;
