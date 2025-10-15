import type { Plan } from "../entities/Plan";
import type { PlanRepository } from "../repositories/PlanRepository";

export class GetPlansUseCase {
  private readonly planRepository: PlanRepository;
  constructor(planRepository: PlanRepository) {

    this.planRepository = planRepository;
  }

  async execute(): Promise<Plan[]> {
    return this.planRepository.getPlans();
  }
}
