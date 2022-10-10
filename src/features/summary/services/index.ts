import { UserConfig } from "../../../interface/userInterface";
import { api } from "../../../services/api";

export const gatherSummaryData = async (config: UserConfig) =>
  api.get("/summary", config);
