export type INewUser = {
  id:string,
  name: string;
  email: string;
  // username?: string;
  // password: string;
};
export type ILogin = {
  email: string;
  password: string;
};

export interface UserContextTypes {
  user: INewUser | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
  loginError:string | null;
}