import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { Footer } from "../components/footer";
import { useAuth } from "../hooks/User";
import {
  Container,
  Header,
  Wrapper,
  Icon,
  IconLink,
  Main,
  Scroll,
  ItemRepo,
  ReposItens,
  ListRepo,
} from "../styles/Follow";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router";

const Followers = () => {
  const [repos, setRepos] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (user.followers_url === undefined) {
      return;
    }
    axios.get(user.followers_url).then((response) => {
      if (response.data) {
        setRepos(response.data);
      }
    });
  }, [user]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Icon onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </Icon>
          <span>{user.followers} Seguidores</span>
        </Header>
        <Main>
          <ListRepo>
            <Scroll>
              <ReposItens>
                {repos.map((repo) => (
                  <ItemRepo key={repo.id}>
                    <aside />
                    <img src={repo.avatar_url} alt={repo.logins} />
                    <span>#{repo.login}</span>
                    <IconLink>
                      <ArrowForwardIcon />
                    </IconLink>
                  </ItemRepo>
                ))}
              </ReposItens>
            </Scroll>
          </ListRepo>
        </Main>
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Followers;
