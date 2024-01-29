import React, { useState, ReactNode } from "react";
import {
  auth,
  googleProvider,
  githubProvider,
} from "../services/firebase.config";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { AuthContext, AuthContextType } from "./AuthContext";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    userName: string;
    userImageURL: string | "";
    authProvider: string;
  } | null>(null);

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated((prev) => !prev);
    window.location.reload();
  };

  const authenticateUser = async (authName: string) => {
    try {
      setIsLoading(true);
      const data =
        authName === "Google"
          ? await signInWithPopup(auth, googleProvider)
          : await signInWithPopup(auth, githubProvider);

      // console.log("data ->", data);

      let userName = null;
      let userImageURL = null;
      const additionalUserInfo = getAdditionalUserInfo(data);
      // console.log("additionalUserInfo ->", additionalUserInfo);

      if (authName === "Google") {
        userName = data.user.displayName;
        if (
          additionalUserInfo !== null &&
          additionalUserInfo.profile !== null
        ) {
          userImageURL = additionalUserInfo.profile.picture ?? null;
        }
      } else if (authName === "GitHub") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const token = data._tokenResponse;
        userName = token.screenName;
        userImageURL = token.photoUrl || "";
      }

      setUserData({
        userName: userName,
        userImageURL: userImageURL,
        authProvider: authName,
      });

      localStorage.setItem(
        "userData",
        JSON.stringify({
          userName: userName,
          userImageURL: userImageURL,
        })
      );
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    isLoading,
    setIsLoading,
    authenticateUser,
    userData,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
