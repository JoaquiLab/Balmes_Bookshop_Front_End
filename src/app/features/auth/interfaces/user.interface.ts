export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface User {
  email: string;
  jwtToken: string;
}
