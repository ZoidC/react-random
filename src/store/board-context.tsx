import { createContext, useContext } from "react";

export const BoardContext = createContext<number[][]>([]);

export const useBoard = () => useContext(BoardContext);