import { UserConfig } from "../../../interface/userInterface";
import { api } from "../../../services/api";

export const gatherMethodData = async (id: string | null, config: UserConfig) =>
  api.get(`/method?id=${id}`, config);
