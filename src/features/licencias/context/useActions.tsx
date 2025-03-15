import { useContext } from "react";
import { ActionsContext } from "./ActionsContext";

export const useActions = () => useContext(ActionsContext);
