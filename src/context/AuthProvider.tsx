import useProviderAuth from "@hooks/useProviderAuth";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

// interface IProps {
//   auth: any;
//   setAuth: Dispatch<SetStateAction<any>>;
// }

// const AuthContext = createContext<IProps>({
//   auth: {},
//   setAuth: () => {},
// });
const AuthContext = createContext({} as any);

export const AuthProvider: React.FC<any> = ({ children }) => {
  // const [auth, setAuth] = useState({});
  const auth = useProviderAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
