import { axiosApi } from "../config";

const PATHS = {
  signup: "/auth/register",
  signin: "/auth/login",
};

export const register = async (payload) =>
  await axiosApi.post(PATHS.signup, payload);
export const login = async (payload) =>
  await axiosApi.post(PATHS.signin, payload);
