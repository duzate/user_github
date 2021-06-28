import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #292929;
    height: 812px;
    width: 375px;

    div > svg {
      flex: 1;
      height: 98px;
      width: 98px;
      color: #ffce00;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      padding: 20px 15px;

      border-radius: 12px;
      border: 0;
      color: #535353;

      width: 329px;
      height: 56px;

      font-size: 20px;
    }

    button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

      border-radius: 12px;
      border: 0;

      color: #030202;
      background: #ffce00;

      width: 329px;
      height: 56px;

      font-size: 20px;
      font-weight: 700;

      svg {
        margin-left: 10px;
      }
    }
  }
`;
