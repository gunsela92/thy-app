import React from "react";
import {HeaderNavText, HeaderNavUrl, HeaderWrapper} from "./style";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderNavUrl onClick={() => navigate("/")}>turkishairlines.com</HeaderNavUrl>
      <HeaderNavText>search<b>Flight Challenge</b></HeaderNavText>
    </HeaderWrapper>
  );
};

export default Header;
