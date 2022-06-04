import React, {useEffect, useState} from "react";
import {
  ContinueButton, ContinueIcon, CountChanger, CountChangerContainer,
  CountIcon,
  CountSelector, CountWrapper,
  DateBox,
  DateIcon, PersonCountWrapper, PopoverTitle, RadioWrapper,
  SearchBox,
  SearchIcon,
  SearchOptions,
  SearchWrapper
} from "./style";
import {getStorage} from "../../Utils/storageUtils";
import {faPlaneDeparture, faPlaneArrival, faCalendarAlt, faMale, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const FlightSearch = () => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [personCount, setPersonCount] = useState(1);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState({origin: "", destination: ""});
  const [continueAvailable, setContinueAvailable] = useState(false);
  const navigate = useNavigate();

  const getOptions = () => {
    const flightData = getStorage("flights");
    const origins = flightData?.flights?.reduce((acc, curr) => {
      if (!acc?.includes(curr?.originAirport?.name)) {
        acc.push(curr?.originAirport?.name);
      }
      return acc;
    }, []);
    const destinations = flightData?.flights?.reduce((acc, curr) => {
      if (!acc?.includes(curr?.destinationAirport?.name)) {
        acc.push(curr?.destinationAirport?.name);
      }
      return acc;
    }, []);
    setOrigins(origins);
    setDestinations(destinations);
  }

  useEffect(() => {
    getOptions()
  }, []);

  useEffect(() => {
    const {origin, destination} = selectedDestinations;
    if (origin && destination) {
      setContinueAvailable(true);
    }
  }, [selectedDestinations, personCount, selectedClass]);


  const changePersonCount = (processType) => {
    if (processType === "increase") {
      if (personCount < 6) {
        setPersonCount(personCount + 1);
      }
    } else {
      if (personCount > 1) {
        setPersonCount(personCount - 1);
      }
    }
  }

  const classSelectionContent = (
    <React.Fragment>
      <RadioWrapper.Group onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
        <RadioWrapper value={"Economy"}>Economy Class</RadioWrapper>
        <RadioWrapper value={"Business"}>Business Class</RadioWrapper>
      </RadioWrapper.Group>
      <CountWrapper>
        <span>Yolcu</span>
        <CountChangerContainer>
          <CountChanger onClick={() => changePersonCount("decrease")}>-</CountChanger>
          <span>{personCount}</span>
          <CountChanger onClick={() => changePersonCount("increase")}>+</CountChanger>
        </CountChangerContainer>
      </CountWrapper>
    </React.Fragment>
  )

  const searchFlightOptions = () => {
    const {origin, destination} = selectedDestinations;
    navigate(`/flight-selection/${origin}/${destination}/${personCount}/${selectedClass}`);
  }

  return (
    <SearchWrapper>
      <SearchBox showSearch allowClear optionLabelProp="label" onChange={(e) => setSelectedDestinations({...selectedDestinations ,origin: e})}
        placeholder={<><SearchIcon icon={faPlaneDeparture} /> Nereden</>} size="large">
        {origins?.map(origin =>
          <SearchOptions key={origin} value={origin} label={
            <React.Fragment>
              <SearchIcon icon={faPlaneDeparture} />&nbsp;
              {origin}
            </React.Fragment>}/>)}
      </SearchBox>
      <SearchBox showSearch allowClear optionLabelProp="label" onChange={(e) => setSelectedDestinations({...selectedDestinations ,destination: e})}
        placeholder={<><SearchIcon icon={faPlaneArrival} /> Nereye</>} size="large">
        {destinations?.map(destination =>
          <SearchOptions key={destination} value={destination} label={
            <React.Fragment>
              <SearchIcon icon={faPlaneArrival} />&nbsp;
              {destination}
            </React.Fragment>}/>)}
      </SearchBox>
      <DateBox>Tarih <DateIcon icon={faCalendarAlt} /></DateBox>
      <CountSelector placement="bottomRight"
        title={<PopoverTitle>Kabin ve yolcu seçimi</PopoverTitle>}
        content={classSelectionContent}
        trigger="click" visible={popoverVisible}
        onVisibleChange={() => setPopoverVisible(!popoverVisible)}>
        <span>
          {[...Array(personCount)].map((e, i) => (
            <CountIcon icon={faMale} key={i}/>
          ))}
          <PersonCountWrapper>{personCount}</PersonCountWrapper>
        </span>
      </CountSelector>
      <ContinueButton disabled={!continueAvailable} onClick={searchFlightOptions}>
        <ContinueIcon icon={faAngleRight} />
      </ContinueButton>
    </SearchWrapper>
  );
};

export default FlightSearch;
