import { AxiosRequestConfig } from "axios";

import { api } from "../../../services/api";
import { FormSignIn, FormSignUp, SearchEmail } from "../interface";

export const signUp = async (data: FormSignUp) =>
  api.post("/auth/sign-up", data);

export const signIn = async (data: FormSignIn) =>
  api.post("/auth/sign-in", data);

export const emailCheck = async (data: AxiosRequestConfig<SearchEmail>) =>
  api.get("/auth/search", data);
