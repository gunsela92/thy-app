import styled from "styled-components";

export const HomePageWrapper = styled.section`
  background-color: ${({ theme }) => theme.backgrounds.mainBackground};
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.light};
`;