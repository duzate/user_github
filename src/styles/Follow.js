import styled from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";

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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #1f1f1f;
  font-size: 17px;
  font-weight: bold;

  span {
    margin-right: auto;
  }
`;

export const Icon = styled.button`
  margin-right: auto;
  cursor: pointer;
  background: none;
  border: none;
  color: #ffffff;
`;

export const IconLink = styled.button`
  margin-right: 10px;
  margin-left: auto;
  cursor: pointer;
  background: none;
  border: none;
  color: #ffffff;
`;

export const Main = styled.div``;

export const ListRepo = styled.div`
  position: relative;
`;

export const ReposItens = styled.ul`
  margin-top: 40px;
`;
export const ItemRepo = styled.li`
  display: flex;
  align-items: center;
  height: 80px;

  aside {
    background: #ffce00;
    border-radius: 0 8px 8px 0;
    width: 8px;
  }

  img {
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 25px;
    width: 64px;
    height: 64px;
  }

  span {
    display: flex;
    align-items: center;
    margin-left: 18px;
    font-size: 20px;
    font-weight: bold;
  }

  & + li {
    margin-top: 20px;
  }
  border-bottom: 1px solid #7070705a;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 80vh;
`;
