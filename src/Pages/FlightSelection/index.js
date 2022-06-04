import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getStorage} from "../../Utils/storageUtils";
// eslint-disable-next-line no-unused-vars
import {
  FlightDetails,
  FlightSelectionWrapper,
  FlightTitle,
  PromotionSwitch,
  PromotionText,
  PromotionWrapper
} from "./style";
import FlightList from "../../Components/FlightList";

const FlightSelectionPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [flightData, setFlightData] = useState([]);
  const [promotionActive, setPromotionActive] = useState(false);
  const {origin, destination, personCount, selectedClass} = params;

  useEffect(() => {
    if (!origin || !destination || !personCount || !selectedClass) {
      navigate("/");
    }
    const flightData = getStorage("flights");
    const flights = flightData?.flights?.filter((flight) => flight?.originAirport?.name === origin && flight?.destinationAirport?.name === destination);
    setFlightData(flights);
  }, [params]);

  return (
    <FlightSelectionWrapper>
      <FlightTitle>Uçuş</FlightTitle>
      <FlightDetails>{flightData[0]?.originAirport?.city?.name} - {flightData[0]?.destinationAirport?.city?.name}, {personCount} Yolcu</FlightDetails>
      <PromotionWrapper>
        Promosyon Kodu
        <PromotionSwitch onChange={() => setPromotionActive(!promotionActive)}/>
        <PromotionText>
          Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın alabilirsiniz!
          <br/>
          Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.
        </PromotionText>
      </PromotionWrapper>
      <FlightList flightData={flightData} promotionActive={promotionActive}/>
    </FlightSelectionWrapper>
  );
};

export default FlightSelectionPage;
