import React, {useEffect, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {
  ArrowIcon,
  FilterButtons,
  FlightBox,
  FlightBoxes,
  FlightBoxInfo,
  FlightCard,
  FlightCardInfo,
  FlightCardsWrapper,
  FlightCardTimes,
  FlightCardWrapper,
  FlightCategory,
  FlightCountryCode,
  FlightCountryName,
  FlightCurrency,
  FlightDuration,
  FlightListHeader,
  FlightListWrapper,
  FlightPrice,
  FlightRights,
  PriceBoxes,
  PriceRadioButtons,
  PriceTexts,
  SelectFlight
} from "./style";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";

const FlightList = ({flightData, promotionActive}) => {
  const params = useParams();
  const navigate = useNavigate();
  const {selectedClass} = params;
  const [selectedSortType, setSelectedSortType] = useState("price");
  const [flightClass, setFlightClass] = useState("");
  const [activeTabs, setActiveTabs] = useState([]);

  useEffect(() => {
    setFlightClass(selectedClass || "");
  }, [selectedClass]);

  const sortFlights = useMemo(() => {
    if (flightData?.length) {
      if (selectedSortType === "price") {
        return flightData?.sort((a, b) => a?.fareCategories[flightClass?.toUpperCase()]?.subcategories[0]?.price?.amount - b?.fareCategories[flightClass?.toUpperCase()]?.subcategories[0]?.price?.amount)
      } else {
        return flightData?.sort((a, b) => a?.arrivalDateTimeDisplay?.localeCompare(b?.arrivalDateTimeDisplay))
      }
    } else {
      return []
    }
  }, [flightData, selectedSortType]);

  const handleAccordionClick = (index) => {
    if (activeTabs?.includes(index)) {
      setActiveTabs(activeTabs?.filter(tab => tab !== index))
    } else {
      setActiveTabs([...activeTabs, index])
    }
  }

  const handleRadio = (e) => {
    setFlightClass(e.target.value);
  }

  const flightCardInner = (flightInfo, flightIndex) => {
    return (
      <FlightBoxInfo>
        <FlightCardWrapper>
          <FlightCardTimes>
            {flightInfo?.arrivalDateTimeDisplay}
            <FlightCountryCode>{flightInfo?.originAirport?.city?.code}</FlightCountryCode>
            <FlightCountryName>{flightInfo?.originAirport?.city?.name}</FlightCountryName>
          </FlightCardTimes>
          <hr/>
          <FlightCardTimes>
            {flightInfo?.departureDateTimeDisplay}
            <FlightCountryCode>{flightInfo?.originAirport?.city?.code}</FlightCountryCode>
            <FlightCountryName>{flightInfo?.originAirport?.city?.name}</FlightCountryName>
          </FlightCardTimes>
          <FlightDuration>
            Uçuş Süresi <br/>
            <span>{flightInfo?.flightDuration}</span>
          </FlightDuration>
        </FlightCardWrapper>
        <FlightCardWrapper>
          <PriceBoxes>
            <PriceRadioButtons value={"Economy"} checked={activeTabs.includes(flightIndex) && flightClass === "Economy"}
              onChange={handleRadio}>ECONOMY</PriceRadioButtons>
            <PriceTexts>
              <span>Yolcu Başına</span>
              {flightInfo?.fareCategories?.ECONOMY?.subcategories[0]?.price?.currency} {promotionActive ? flightInfo?.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount / 2 : flightInfo?.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount}
            </PriceTexts>
            <ArrowIcon icon={faAngleDown}/>
          </PriceBoxes>
        </FlightCardWrapper>
        <FlightCardWrapper>
          <PriceBoxes>
            <PriceRadioButtons value={"Business"}
              checked={activeTabs.includes(flightIndex) && flightClass === "Business"}
              onChange={handleRadio}>BUSINESS</PriceRadioButtons>
            <PriceTexts>
              <span>Yolcu Başına</span>
              {flightInfo?.fareCategories?.BUSINESS?.subcategories[0]?.price?.currency} {flightInfo?.fareCategories?.BUSINESS?.subcategories[0]?.price?.amount}
            </PriceTexts>
            <ArrowIcon icon={faAngleDown}/>
          </PriceBoxes>
        </FlightCardWrapper>
      </FlightBoxInfo>
    )
  }

  return (
    <FlightListWrapper>
      <FlightListHeader>
        <span>Sıralama Kriteri</span>
        <FilterButtons onClick={() => setSelectedSortType("price")}>Ekonomi Ücreti</FilterButtons>
        <FilterButtons onClick={() => setSelectedSortType("time")}>Kalkış Saati</FilterButtons>
      </FlightListHeader>
      {sortFlights?.length > 0 && sortFlights?.map((e, index) => (
        <FlightBoxes key={index} accordion expandIcon={() => <></>} onChange={() => handleAccordionClick(index)}
          bordered={false}>
          <FlightBox header={flightCardInner(e, index)}>
            <FlightCardsWrapper>
              {e?.fareCategories[flightClass?.toUpperCase()]?.subcategories?.map((category, catIndex) => (
                <FlightCard key={catIndex}>
                  <FlightCardInfo>
                    <FlightCategory>
                      {category?.brandCode}
                    </FlightCategory>
                    <div>
                      <FlightCurrency>
                        {category?.price?.currency}
                      </FlightCurrency>
                      <FlightPrice>
                        {promotionActive && category?.brandCode === "ecoFly" ? category?.price?.amount / 2 : category?.price?.amount}
                      </FlightPrice>
                    </div>
                  </FlightCardInfo>
                  <FlightRights>
                    {category?.rights?.map((right, rightIndex) => (
                      <span key={rightIndex}>{right}</span>
                    ))}
                  </FlightRights>
                  <SelectFlight disabled={promotionActive && category?.brandCode !== "ecoFly"} 
                    onClick={() => navigate(`/result/${category?.status === "AVAILABLE" ? "success" : "error"}/${promotionActive ? category?.price?.amount / 2 : category?.price?.amount}`)}>
                    Uçuşu Seç
                  </SelectFlight>
                </FlightCard>
              ))}
            </FlightCardsWrapper>
          </FlightBox>
        </FlightBoxes>
      ))}
    </FlightListWrapper>
  );
};

FlightList.propTypes = {
  flightData: PropTypes.array.isRequired,
  promotionActive: PropTypes.bool.isRequired,
}

export default FlightList;
