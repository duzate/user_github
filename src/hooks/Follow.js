import { useContext } from "react";
import { FollowContext } from "../providers/follow";

export const useFollow = () => {
  const value = useContext(FollowContext);

  return value;
};
