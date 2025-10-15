import type { UserDataRepository } from "../repositories/UserDataRepository";

export class SaveUserUseCase {
  private readonly repository: UserDataRepository;
  constructor(repository: UserDataRepository) {
    this.repository = repository;
  }

  async execute(): Promise<void> {
    await this.repository.fetchAndSave();
  }
}
