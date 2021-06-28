import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: auto;
  position: relative;
  height: 80px;
  border-radius: 15px 15px 0 0;

  font-size: 15px;
  background: #ffffff;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #a5a5a5;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
