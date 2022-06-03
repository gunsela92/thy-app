import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const FlightSelectionPage = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    if (!params.state) {
      navigate("/");
    } else {
      const { flights } = params.state;
      setFlightData(flights);
    }
  }, [params]);



  return (
    <div>
      {flightData?.map((e, index) => (
        <div key={index}>{e?.arrivalDateTimeDisplay}</div>
      ))}
    </div>
  );
};

export default FlightSelectionPage;
