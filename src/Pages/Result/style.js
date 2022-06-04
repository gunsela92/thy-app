import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ResultPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > hr {
    width: 100%;
    border-top: ${({theme}) => theme.colors.radioTexts};
  }
`;

export const ResultTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ResultIcon = styled(FontAwesomeIcon)`
  color: ${({theme, result}) => result === "success" ? theme.colors.success : theme.colors.red};
  font-size: ${({theme}) => theme.fontSizes.title};
  margin-right: 40px;
`;

export const ResultText = styled.span`
  font-size: ${({theme}) => theme.fontSizes.title};
  font-family: ${({theme}) => theme.fonts.semibold};
`;

export const TotalPriceText = styled.div`
  font-size: ${({theme}) => theme.fontSizes.title};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const TotalPrice = styled.span`
  font-size: ${({theme}) => theme.fontSizes.title};
  color: #2e2ec2;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

export const ReturnButton = styled.button`
  background-color: ${({theme}) => theme.colors.flightSelection};
  border: none;
  outline: none;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.extraSmall};
  padding: 15px;
  cursor: pointer;
  min-width: 150px;
  border-radius: 3px;
`;