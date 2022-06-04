import React from "react";
import {HeaderNavText, HeaderNavUrl, HeaderWrapper} from "./style";
import {useNavigate, useLocation} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <HeaderWrapper path={pathname.includes("flight-selection")}>
      <HeaderNavUrl onClick={() => navigate("/")}>turkishairlines.com</HeaderNavUrl>
      <HeaderNavText>search<b>Flight Challenge</b></HeaderNavText>
    </HeaderWrapper>
  );
};

export default Header;
