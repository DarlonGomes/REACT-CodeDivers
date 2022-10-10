import { SignInResponse } from "../features/authentication/interface";

function storeData(data: SignInResponse) {
  localStorage.setItem("codediver_user_info", JSON?.stringify(data));
}

function retrieve() {
  const response = localStorage.getItem("codediver_user_info");
  if (response) {
    const parsed = JSON?.parse(response);
    return parsed;
  }
  return false;
}

export { storeData, retrieve };
