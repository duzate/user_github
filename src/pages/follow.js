import React from "react";
import { useAuth } from "../hooks/User";
import { useFollow } from "../hooks/Follow";
import { Link } from "react-router-dom";
import { Aside } from "../components/aside";
import {
  Avatar,
  Bio,
  Card,
  Container,
  Data,
  Description,
  Header,
  User,
  Wrapper,
} from "../styles/UserFollow.js";
import { useHistory } from "react-router-dom";
import { Footer } from "../components/footer";

export const Follow = () => {
  const { setUser, handleUser } = useAuth();
  const { follow } = useFollow();
  const history = useHistory();
  const handleSave = () => {
    setUser({ name: follow.login });
    handleUser();
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <div>
            <button onClick={() => history.goBack()}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div>#{follow.login}</div>
          <div>
            <button onClick={handleSave}>
              Salvar
              <i className="fas fa-sign-in-alt"></i>
            </button>
          </div>
        </Header>
        <Avatar>
          <img src={follow.avatar_url} alt={follow.login} />
        </Avatar>
        <User>
          <div>
            <Aside />
            <span>{follow.name}</span>
          </div>
          <Description>
            {follow.email}
            {follow.location}
          </Description>
        </User>
        <Data>
          <Link to="/followers">
            <Card>
              {follow.followers}
              <span>Seguidores</span>
            </Card>
          </Link>
          <Link to="/following">
            <Card>
              {follow.following}
              <span>Seguindo</span>
            </Card>
          </Link>
          <Link to="/repos">
            <Card>
              {follow.public_repos}
              <span>Repos</span>
            </Card>
          </Link>
        </Data>
        <Bio>
          <div>
            <Aside />
            <span>BIO</span>
          </div>
          <p>{follow.bio}</p>
        </Bio>
        <Footer />
      </Container>
    </Wrapper>
  );
};
