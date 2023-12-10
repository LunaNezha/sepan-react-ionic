import { Roles } from "@enums/roles.enum";

export type LoginRequest = {
  Account: string;
  Password: string;
};

export type AuthDetails = {
  isAuthenticated: boolean;
  userName: string;
  email: string;
  roles: Roles[];
  token: string;
  tokenExpiresOn: Date;
  refreshToken: string;
  refreshTokenExpiration: Date;
};
