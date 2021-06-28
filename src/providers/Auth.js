import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");

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
        url,
      } = JSON.parse(storagedUser);
      setUser({
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
        url: url,
      });
    }
  }, []);
  const handleUser = async () => {
    const response = await api.get(user.name);
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
        url,
      } = response.data;
      setUser({
        login: login,
        name: name,
        email: email,
        url: url,
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
      localStorage.setItem("@App:user", JSON.stringify(response.data));
    }
  };

  const Logout = () => {
    localStorage.removeItem("@App:user");
    setUser("");
  };

  return (
    <UserContext.Provider value={{ user, setUser, Logout, handleUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
