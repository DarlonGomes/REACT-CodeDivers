export interface UserData {
  id: string;
  username: string;
  email: string;
  password?: string;
  image: string;
  githubUrl: string;
}

export interface UserConfig {
  headers: {
    Authorization: string;
  };
}
