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
  margin-left: 10px;
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
  flex-direction: column;
  height: 151.5px;
  div {
    display: flex;
  }
  span {
    margin-left: 18px;
    font-size: 20px;
  }
  p {
    margin: 10px 50px 0 25px;
    line-height: 20px;
  }

  & + li {
    margin-top: 20px;
  }
  border-bottom: 1px solid #7070705a;
`;

export const Rol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 50px 10px 25px;
  span {
    margin-left: 5px;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 80vh;
`;
