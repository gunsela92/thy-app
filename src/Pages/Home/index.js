import React from "react";
import {HomePageWrapper, SearchTitle} from "./style";
import FlightSearch from "../../Components/FlightSearch";

const HomePage = () => {
  return (
    <HomePageWrapper data-testid="mainScreen">
      <SearchTitle>
        Merhaba
        <br />
        Nereyi keşfetmek istersiniz?
      </SearchTitle>
      <FlightSearch/>
    </HomePageWrapper>
  );
};

export default HomePage;
