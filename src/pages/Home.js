import React from "react";
import { useAuth } from "../hooks/User";
import { Link } from "react-router-dom";
import { Aside } from "../components/aside";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
} from "../styles/Home.js";
import { useHistory } from "react-router-dom";
import { Footer } from "../components/footer";

export const Home = () => {
  const { user, Logout } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    Logout();
    history.push("/");
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <div># {user.login}</div>
          <button onClick={handleLogout}>
            Sair <ExitToAppIcon />
          </button>
        </Header>
        <Avatar>
          <img src={user.avatar_url} alt={user.login} />
        </Avatar>
        <User>
          <div>
            <Aside />
            <span>{user.name}</span>
          </div>
          <Description>
            {user.email}
            {user.location}
          </Description>
        </User>
        <Data>
          <Link to="/followers">
            <Card>
              {user.followers}
              <span>Seguidores</span>
            </Card>
          </Link>
          <Link to="/following">
            <Card>
              {user.following}
              <span>Seguindo</span>
            </Card>
          </Link>
          <Link to="/repos">
            <Card>
              {user.public_repos}
              <span>Repos</span>
            </Card>
          </Link>
        </Data>
        <Bio>
          <div>
            <Aside />
            <span>BIO</span>
          </div>
          <p>{user.bio}</p>
        </Bio>
        <Footer />
      </Container>
    </Wrapper>
  );
};
