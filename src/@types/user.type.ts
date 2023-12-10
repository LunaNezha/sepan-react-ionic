import { Roles } from "@enums/roles.enum";

export type UserDetails = {
  username?: string;
  firstname: string;
  lastname: string;
  phoneNumber?: string;
  roles: Roles[];
  gender: number;
  birthDate?: Date;
  registerDate: Date;
  photo: string;
};

export type PersonDetailsRequest = {
  phoneNumber: string;
};

export type AddCustomerRequest = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  gender?: number;
  birthDate?: Date;
};
