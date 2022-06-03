import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Popover } from "antd";

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
  padding: 19px 10px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

export const CountIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const PersonCountWrapper = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const ContinueButton = styled.button`
  padding: 13px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.flightSelection};
  border: none;
  outline: none;
  max-height: 60px;
  cursor: pointer;
`;

export const ContinueIcon = styled(FontAwesomeIcon)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.white};
`;