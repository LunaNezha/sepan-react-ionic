import { TOKEN } from "@constants/local-storage.const";
import React, { createContext, useContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

type AuthContextProps = {
  token?: any;
  setToken: React.Dispatch<React.SetStateAction<any>>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const storedToken = secureLocalStorage.getItem(TOKEN);
  const [token, setToken] = useState(storedToken);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
