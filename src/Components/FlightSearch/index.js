import React, {useEffect, useState} from "react";
import {
  ContinueButton, ContinueIcon,
  CountIcon,
  CountSelector,
  DateBox,
  DateIcon, PersonCountWrapper,
  SearchBox,
  SearchIcon,
  SearchOptions,
  SearchWrapper
} from "./style";
import {getStorage} from "../../Utils/storageUtils";
import {faPlaneDeparture, faPlaneArrival, faCalendarAlt, faUsers, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const FlightSearch = () => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [personCount, setPersonCount] = useState(1);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const getOptions = () => {
    const flightData = getStorage("flights");
    const origins = flightData?.flights?.reduce((acc, curr) => {
      if (!acc.includes(curr?.originAirport?.name)) {
        acc.push(curr?.originAirport?.name);
      }
      return acc;
    }, []);
    const destinations = flightData?.flights?.reduce((acc, curr) => {
      if (!acc.includes(curr?.destinationAirport?.name)) {
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

  return (
    <SearchWrapper>
      <SearchBox showSearch allowClear optionLabelProp="label"
        placeholder={<><SearchIcon icon={faPlaneDeparture} /> Nereden</>} size="large">
        {origins?.map(origin =>
          <SearchOptions key={origin} value={origin} label={
            <React.Fragment>
              <SearchIcon icon={faPlaneDeparture} />&nbsp;
              {origin}
            </React.Fragment>}/>)}
      </SearchBox>
      <SearchBox showSearch allowClear optionLabelProp="label"
        placeholder={<><SearchIcon icon={faPlaneArrival} /> Nereye</>} size="large">
        {destinations?.map(destination =>
          <SearchOptions key={destination} value={destination} label={
            <React.Fragment>
              <SearchIcon icon={faPlaneArrival} />&nbsp;
              {destination}
            </React.Fragment>}/>)}
      </SearchBox>
      <DateBox>Tarih <DateIcon icon={faCalendarAlt} /></DateBox>
      <CountSelector placement="bottomRight" title={"aaa"} trigger="click" visible={popoverVisible} onVisibleChange={() => setPopoverVisible(!popoverVisible)}>
        <span>
          <CountIcon icon={faUsers} />
          <PersonCountWrapper>{personCount}</PersonCountWrapper>
        </span>
      </CountSelector>
      <ContinueButton><ContinueIcon icon={faAngleRight} /></ContinueButton>
    </SearchWrapper>
  );
};

export default FlightSearch;
