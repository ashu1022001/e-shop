import { createContext } from "react";
import { IUser } from "../types/user";

export const AuthContext = createContext<[IUser | null, React.Dispatch<React.SetStateAction<IUser | null>>] | []>([]);