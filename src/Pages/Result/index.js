import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {
  ButtonWrapper,
  ResultIcon,
  ResultPageWrapper,
  ResultText,
  ResultTextWrapper,
  ReturnButton,
  TotalPrice,
  TotalPriceText
} from "./style";

const ResultPage = () => {
  const {result, price} = useParams();
  const navigate = useNavigate();

  return (
    <ResultPageWrapper>
      <ResultTextWrapper>
        <ResultIcon icon={result === "success" ? faCheckCircle : faTimesCircle} result={result}/>
        <ResultText>{`Kabin seçiminiz ${result === "success" ? "tamamlandı" : "tamamlanamadı"}.`}</ResultText>
      </ResultTextWrapper>
      <hr />
      {result === "success" && (
        <TotalPriceText>
          <span>Toplam tutar</span>
          <TotalPrice>TRY {price}</TotalPrice>
        </TotalPriceText>
      )}
      {result === "error" && (
        <ButtonWrapper>
          <ReturnButton onClick={() => navigate("/")}>Başa Dön</ReturnButton>
        </ButtonWrapper>
      )}
    </ResultPageWrapper>
  );
};

export default ResultPage;
