import { UserData, UserConfig } from "../../../interface/userInterface";

export interface FormSignUp {
  username: string;
  email: string;
  image: string;
  githubUrl: string;
  password: string;
  confirmPassword: string;
}

export interface SearchEmail {
  email: string;
}

export interface FormSignIn {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: UserData;
  config: UserConfig;
}
