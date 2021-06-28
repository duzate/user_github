import { useContext } from "react";
import { UserContext } from "../providers/Auth";

export const useAuth = () => {
  const value = useContext(UserContext);

  return value;
};
