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
import { useFollow } from "../hooks/Follow";

const Following = () => {
  const [repos, setRepos] = useState([]);
  const { setFollow, handleFollow } = useFollow();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (`${user.url}/following` === undefined) {
      return;
    }
    axios.get(`${user.url}/following`).then((response) => {
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
          <span>{user.following} Seguindo</span>
        </Header>
        <Main>
          <ListRepo>
            <Scroll>
              <ReposItens>
                {repos.map((repo) => (
                  <ItemRepo key={repo.id}>
                    <aside />
                    <img src={repo.avatar_url} alt={repo.login} />
                    <span>#{repo.login}</span>
                    <IconLink
                      onClick={() => {
                        setFollow({ name: repo.login });
                        handleFollow();
                        history.push("/follow");
                      }}
                    >
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

export default Following;
