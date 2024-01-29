import { createContext, Dispatch, SetStateAction } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  authenticateUser: (authName: string) => Promise<void>;
  userData: { userName: string; userImageURL: string | ""; authProvider: string } | null;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  setIsLoading: () => {},
  authenticateUser: async () => {},
  userData: null,
  logout: () => {}
});