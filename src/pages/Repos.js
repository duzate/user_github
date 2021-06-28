import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { Footer } from "../components/footer";
import { useAuth } from "../hooks/User";
import { Aside } from "../components/aside";
import {
  Container,
  Header,
  Wrapper,
  Icon,
  Main,
  Scroll,
  ItemRepo,
  ReposItens,
  ListRepo,
  Rol,
} from "../styles/Repos";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (user.repos_url === undefined) {
      return;
    }
    axios.get(user.repos_url).then((response) => {
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
          <span>{user.public_repos} repositórios</span>
        </Header>
        <Main>
          <ListRepo>
            <Scroll>
              <ReposItens>
                {repos.map((repo) => (
                  <ItemRepo key={repo.id}>
                    <div>
                      <Aside />
                      <span>{repo.name}</span>
                    </div>
                    <div>
                      <p>{repo.description}</p>
                    </div>
                    <Rol>
                      <div>
                        <StarBorderIcon />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div>
                        {!repo.private ? (
                          <LockOpenOutlinedIcon />
                        ) : (
                          <LockOutlinedIcon />
                        )}
                      </div>
                    </Rol>
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

export default Repos;
