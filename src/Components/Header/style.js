import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding: 15px 0 10px;
  box-sizing: border-box;
  height: 40px;
  margin: 0 auto;
  position: absolute;
  border-bottom: ${({ theme, path }) => path ? `1px solid ${theme.colors.black}` : `1px solid ${theme.colors.white}`};
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme, path }) => path ? theme.colors.black : theme.colors.white};
`;

export const HeaderNavUrl = styled.div`
  cursor: pointer;
  font-weight: bold;
`;

export const HeaderNavText = styled.span`
  cursor: pointer;
`;