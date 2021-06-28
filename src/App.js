import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { UserProvider } from "./providers/Auth";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";
import Repos from "./pages/Repos";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import { Follow } from "./pages/follow";
import { FollowProvider } from "./providers/follow";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <FollowProvider>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/repos" component={Repos} />
            <Route path="/following" component={Following} />
            <Route path="/followers" component={Followers} />
            <Route path="/follow" component={Follow} />
          </FollowProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
