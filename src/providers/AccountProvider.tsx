import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { AccountDetailsAPI } from "@api/user";
import { enqueueSnackbar } from "notistack";
import { UserDetails } from "src/@types/user.type";

type AccountContextProps = {
  accountData: UserDetails | undefined;
  setAccountData: React.Dispatch<React.SetStateAction<any>>;
};

type AccountProviderProps = {
  children: React.ReactNode;
};

const AccountContext = createContext<AccountContextProps | undefined>(
  undefined,
);

const AccountProvider = ({ children }: AccountProviderProps) => {
  const [accountData, setAccountData] = useState<UserDetails | undefined>(undefined);
  const { token} = useAuth();

  const { data: getAccountData } = useQuery({
    queryKey: ["accountData"],
    queryFn: async () => {
      if (token) {
        try {
          const response = await AccountDetailsAPI();
          if(response.data.isSuccessful){
            return response.data.data;
          }
          else{
            enqueueSnackbar(response.data.message, { variant: "error" });
            return undefined;
          }
        } catch (error) {
          throw new Error("Error fetching account data");
        }
      }
      return null;
    },
    enabled: token !== undefined,
  });

  useEffect(() => {
    if (getAccountData !== undefined && getAccountData !== null) {
      setAccountData(getAccountData);
    }
  }, [getAccountData, setAccountData]);

  return (
    <AccountContext.Provider value={{ accountData, setAccountData }}>
      {children}
    </AccountContext.Provider>
  );
};

const useAccount = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("useAccount must be used within a AccountProvider");
  }

  return context;
};

export { AccountProvider, useAccount };
