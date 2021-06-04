import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const HomeBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HomeBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #2d84fc;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  boarder: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2sease-in-out;
    background: #f5f5f5;
    color: #205072;
  }
`;