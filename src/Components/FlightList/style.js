import styled from "styled-components";
import {Collapse, Radio} from "antd";

const { Panel } = Collapse;

export const FlightListWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 30px;
  max-width: 850px;
  min-width: 400px;
`;

export const FlightListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({theme}) => theme.backgrounds.filterBackground};
  color: ${({theme}) => theme.colors.white};
  padding: 10px;
  font-size: ${({theme}) => theme.fontSizes.tiny};
  
  & > span {
    margin-right: 20px;
  }
`;

export const FilterButtons = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  margin: 0 5px;
  padding: 5px 15px;
  outline: none;
  cursor: pointer;
`;

export const FlightCards = styled(Collapse)`
  background-color: ${({theme}) => theme.colors.headerColor};
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const FlightCard = styled(Panel)`
  min-height: 100px;
  width: 100%;
  background-color: transparent;

  & > .ant-collapse-content {
    background-color: transparent !important;
  }
  & > .ant-collapse-header {
    width: 100%;
  }
`;

export const FlightCardInfo = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
`;

export const FlightCardWrapper = styled.div`
  box-shadow: ${({theme}) => theme.shadow};
  background-color: ${({theme}) => theme.colors.white};
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  
  > hr {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FlightCardTimes = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

export const FlightCountryCode = styled.span`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const FlightCountryName = styled.span`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const FlightDuration = styled.div`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  margin:0 20px 0 40px;
  white-space: nowrap;
  text-align: center;
  > span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.semibold};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const PriceBoxes = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
`;

export const PriceRadioButtons = styled(Radio)`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-family: ${({ theme }) => theme.fonts.semibold};
  
  > span:not(.ant-radio) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor}; 
  }
`;

export const PriceTexts = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  white-space:nowrap;
  font-family: ${({ theme }) => theme.fonts.semibold};
  
  > span {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall};
    color: ${({ theme }) => theme.colors.radioTexts};
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;