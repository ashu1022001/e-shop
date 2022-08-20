
import "./App.css";
import { AuthContext } from "./contexts/auth";
import { useEffect, useState } from "react";
import { IUser } from "./types/user";
import Layout from "./templates/layout/Layout";

export default function App() {
  const [ currentUser, setCurrentUser ] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      <Layout></Layout>
    </AuthContext.Provider>
  );
}
