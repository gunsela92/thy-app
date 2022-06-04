import styled from "styled-components";
import { Switch } from "antd";

export const FlightSelectionWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100% - 400px);
  margin: 60px auto 0;
`;

export const FlightTitle = styled.div`
  background-color: ${({theme}) => theme.colors.red};
  text-align: center;
  padding: 3px 0;
  font-size: ${({theme}) => theme.fontSizes.extraSmall};
  color: ${({theme}) => theme.colors.white};
  max-width:100px;
`;

export const FlightDetails = styled.div`
  display: block;
  font-size: ${({theme}) => theme.fontSizes.large};
  margin-top: 5px;
`;

export const PromotionWrapper = styled.div`
  font-size: ${({theme}) => theme.fontSizes.small};
  margin-top: 20px;
  font-weight: bold;
`;

export const PromotionSwitch = styled(Switch)`
  max-width: 40px;
  margin-left: 20px;
`;