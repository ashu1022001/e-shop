import { useCallback, useContext, useMemo, useState } from "react";
import { AuthContext } from "../contexts/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile 
} from "firebase/auth";
import { IUser } from "../types/user";



export const useAuth = () => {
  const auth = useMemo(() => getAuth(), []);
  const [currentUser, setCurrentUser] = useContext(AuthContext);

  const updateLoggedInUser = useCallback((user: IUser | null) => {
    if (setCurrentUser) {
      setCurrentUser(user);
    }
  }, [setCurrentUser]);

  const signUp = useCallback(async (email: string, password: string, displayName: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = { ...user, displayName };
      await updateProfile(user, { displayName: newUser.displayName });
      updateLoggedInUser({
        displayName: newUser.displayName!,
        email: newUser.email!,
      });
      return newUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      updateLoggedInUser({
        displayName: user.user.displayName!,
        email: user.user.email!,
      });
    } catch (err) {
      return null;
    }
  }, []);

  const logout = useCallback(async () => {
    await auth.signOut();
    updateLoggedInUser(null);
  }, []);

  const restoreLoggedInState = useCallback(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        updateLoggedInUser({
          displayName: user.displayName!,
          email: user.email!,
        });
      }
      if (unsubscribe) {
        unsubscribe();
      }
    });
  }, []);

  return {
    currentUser,
    login,
    logout,
    signUp,
    restoreLoggedInState,
  };
};
