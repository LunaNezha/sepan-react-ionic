import { Roles } from "@enums/roles.enum";
import React, { useState } from "react";

const useProviderAuth = () => {
  const [user, setUser] = useState(Roles.PATIENT);

  const login = (result: () => void) => {
    return setTimeout(() => {
      setUser(Roles.PATIENT);
      result();
    }, 1000);
  };

  const logout = (result: () => void) => {
    return setTimeout(() => {
      setUser(Roles.PATIENT);
      result();
    }, 1000);
  };

  return { user, login, logout };
};

export default useProviderAuth;
