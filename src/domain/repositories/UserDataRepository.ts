import type { User } from "../entities/User";

export interface UserDataRepository {
  fetchAndSave(): Promise<void>;
  get(): User | null;
}
