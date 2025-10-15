import type { UserData } from "../entities/UserData";

export interface UserDataRepository {
  fetchAndSave(): Promise<void>;
  get(): UserData | null;
}
