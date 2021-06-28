import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
export const FollowContext = createContext({});

export const FollowProvider = (props) => {
  const [follow, setFollow] = useState({});

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:follow");

    if (storagedUser) {
      const {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
        repos_url,
      } = JSON.parse(storagedUser);
      setFollow({
        login: login,
        name: name,
        email: email,
        location: location,
        company: company,
        bio: bio,
        avatar_url: avatar_url,
        followers_url: followers_url,
        following_url: following_url,
        organizations_url: organizations_url,
        starred_url: starred_url,
        public_repos: public_repos,
        public_gists: public_gists,
        followers: followers,
        following: following,
        repos_url: repos_url,
      });
    }
  }, []);

  const handleFollow = async () => {
    console.log(follow.name);
    const response = await api.get(follow.name);
    console.log(response);

    if (response.data) {
      const {
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following,
        repos_url,
      } = response.data;
      setFollow({
        login: login,
        name: name,
        email: email,
        location: location,
        company: company,
        bio: bio,
        avatar_url: avatar_url,
        followers_url: followers_url,
        following_url: following_url,
        organizations_url: organizations_url,
        starred_url: starred_url,
        public_repos: public_repos,
        public_gists: public_gists,
        followers: followers,
        repos_url: repos_url,
        following: following,
      });
      localStorage.setItem("@App:follow", JSON.stringify(response.data));
    }
  };

  return (
    <FollowContext.Provider value={{ follow, setFollow, handleFollow }}>
      {props.children}
    </FollowContext.Provider>
  );
};
