import type { UserDataRepository } from "../../domain/repositories/UserDataRepository";
import type { User } from "../../domain/entities/User";
export class UserDataStorage implements UserDataRepository { 
      private key = "formData";

  async fetchAndSave(): Promise<void> {
    const res = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
    const data: User = await res.json();
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  get(): User | null {
    const saved = localStorage.getItem(this.key);
    return saved ? JSON.parse(saved) : null;
  }
 }