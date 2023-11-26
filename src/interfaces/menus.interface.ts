import { Roles } from "@enums/roles.enum";

export interface IMenus {
  url: string;
  icon: string;
  title: string;
  role: Roles | Roles[];
}
