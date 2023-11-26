import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "@hooks/useAuth";

const ProtectedRoute: React.FC<any> = ({ children, ...rest }) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (auth.user) return children;
        else
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
