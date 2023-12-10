export type APIResponse<T = any> = {
  isSuccessful: boolean;
  message: string;
  data?: T;
};