import { UserConfig } from "../../../interface/userInterface";
import { api } from "../../../services/api";

export const gatherChallengeData = async (
  id: string | null,
  config: UserConfig
) => api.get(`/challenge?id=${id}`, config);
