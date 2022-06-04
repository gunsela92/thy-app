import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Popover, Radio } from "antd";

const { Option } = Select;

export const SearchWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.selectionColor};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled(Select)`
  width: 230px;
  margin-right: 10px;

  & > .ant-select-selector {
    height: 60px !important;
    align-items: center;
  }

  & > .ant-select-selector > span {
    display: flex;
    align-items: center;
  }
`;

export const SearchOptions = styled(Option)`
  width: 100%;
  
  & > .ant-select-item-option-content {
    display: none;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const DateBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 100px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  padding: 19px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const DateIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CountSelector = styled(Popover)`
  cursor: pointer;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: end;
  height: 60px;
`;

export const PopoverTitle = styled.span`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const CountIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

export const PersonCountWrapper = styled.span`
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  bottom: 12px;
  float: right;
  display: block;
  width: 100%;
  text-align: right;
`;

export const ContinueButton = styled.button`
  padding: 13px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.flightSelection};
  border: none;
  outline: none;
  max-height: 60px;
  cursor: pointer;
  
  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

export const ContinueIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.white};
`;

export const RadioWrapper = styled(Radio)`
  color: ${({ theme }) => theme.colors.radioTexts};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px 0;
  
  & > span {
    font-size: ${({ theme }) => theme.fontSizes.tiny};
  }
`;

export const CountChangerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountChanger = styled.button`
  background: ${({ theme }) => theme.colors.countButtons};
  border: none;
  outline: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 3px;
  cursor: pointer;
  
  &:active {
    background: ${({ theme }) => theme.colors.gray};
    transition: all .3s;
  }
`;