import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

import { FooterContainer, CardFooter } from "../styles/footer";
export const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/home">
        <CardFooter>
          <HomeRoundedIcon />
          <span>Home</span>
        </CardFooter>
      </Link>
      <Link to="/repos">
        <CardFooter>
          <GitHubIcon />
          <span>Repos</span>
        </CardFooter>
      </Link>
      <Link to="/followers">
        <CardFooter>
          <PeopleIcon />
          <span>Seguidores</span>
        </CardFooter>
      </Link>
      <Link to="/following">
        <CardFooter>
          <PeopleIcon />
          <span>Seguindo</span>
        </CardFooter>
      </Link>
    </FooterContainer>
  );
};
