import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #292929;
  color: #fff;
  width: 375px;
  height: 100vh;
`;

export const Header = styled.div`
  font-size: 17px;

  margin: 24px 12px;

  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
    svg {
      color: #d03434;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border: 3px solid #fff;
    border-radius: 50%;
    width: 115px;
    height: 115px;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  div {
    display: flex;
  }

  span {
    margin-left: 14px;
    font-size: 26px;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  margin-top: 6px;
  margin-left: 20px;
  font-size: 18px;
`;

export const Data = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #5252525d;
  margin-top: 45px;
  height: 100px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  width: 70px;

  span {
    font-size: 17px;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  span {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
  }
  p {
    font-size: 16px;
    margin-left: 25px;
  }
`;
