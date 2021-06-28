import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Container } from "../styles/Login";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/User";

export const Login = () => {
  const { setUser, handleUser } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ name: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUser();
    history.push("/home");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <GitHubIcon />
        </div>
        <div>
          <input
            type="text"
            name="login"
            placeholder="Usuário"
            autoComplete="login"
            onChange={handleChange}
          />
          <button>
            ENTRAR <ArrowForwardIcon />
          </button>
        </div>
      </form>
    </Container>
  );
};
