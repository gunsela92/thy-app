import React, {useMemo, useState} from "react";
import PropTypes from "prop-types";
import {
  FilterButtons,
  FlightCard,
  FlightCardInfo,
  FlightCards, FlightCardTimes,
  FlightCardWrapper, FlightCountryCode, FlightCountryName, FlightDuration,
  FlightListHeader,
  FlightListWrapper, PriceBoxes, PriceRadioButtons, PriceTexts
} from "./style";
import {useParams} from "react-router-dom";

const FlightList = ({flightData, promotionActive}) => {
  const [selectedSortType, setSelectedSortType] = useState("price");
  const params = useParams();
  const {selectedClass} = params;
  console.log(promotionActive)

  const sortFlights = useMemo(() => {
    if (flightData?.length) {
      if (selectedSortType === "price") {
        const newFlights = flightData.sort((a, b) => a.fareCategories[selectedClass.toUpperCase()]?.subcategories[0]?.price?.amount - b.fareCategories[selectedClass.toUpperCase()]?.subcategories[0]?.price?.amount);
        return newFlights
      } else {
        const newFlights = flightData.sort((a, b) => new Date(`July 20, 2021 ${a.arrivalDateTimeDisplay} `) - new Date(`July 20, 2021 ${b.arrivalDateTimeDisplay}`))
        return newFlights
      }
    } else {
      return []
    }
  }, [flightData, selectedSortType]);

  const flightCardInner = (flightInfo) => {
    console.log(flightInfo)
    return (
      <FlightCardInfo>
        <FlightCardWrapper>
          <FlightCardTimes>
            {flightInfo?.arrivalDateTimeDisplay}
            <FlightCountryCode>{flightInfo?.originAirport?.city?.code}</FlightCountryCode>
            <FlightCountryName>{flightInfo?.originAirport?.city?.name}</FlightCountryName>
          </FlightCardTimes>
          <hr />
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
            <PriceRadioButtons value={"Economy"}>ECONOMY</PriceRadioButtons>
            <PriceTexts>
              <span>Yolcu Başına</span>
              {flightInfo?.fareCategories?.ECONOMY?.subcategories[0]?.price?.currency + " " + flightInfo?.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount}
            </PriceTexts>
          </PriceBoxes>
        </FlightCardWrapper>
        <FlightCardWrapper>
          <PriceBoxes>
            <PriceRadioButtons value={"Business"}>BUSINESS</PriceRadioButtons>
            <PriceTexts>
              <span>Yolcu Başına</span>
              {flightInfo?.fareCategories?.BUSINESS?.subcategories[0]?.price?.currency + " " + flightInfo?.fareCategories?.BUSINESS?.subcategories[0]?.price?.amount}
            </PriceTexts>
          </PriceBoxes>
        </FlightCardWrapper>
      </FlightCardInfo>
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
        <FlightCards key={index} accordion expandIcon={() => <></>}>
          <FlightCard header={flightCardInner(e)}>
            <div>{e?.fareCategories[selectedClass.toUpperCase()]?.subcategories[0].price.amount}</div>
          </FlightCard>
        </FlightCards>
      ))}
    </FlightListWrapper>
  );
};

FlightList.propTypes = {
  flightData: PropTypes.array.isRequired,
  promotionActive: PropTypes.bool.isRequired,
}

export default FlightList;
