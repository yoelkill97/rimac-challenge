
import type { PlanRepository } from "../../domain/repositories/PlanRepository";
import type { Plan } from "../../domain/entities/Plan";
export class PlanRepositoryImpl implements PlanRepository {
  async getPlans(): Promise<Plan[]> {
    const res = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/plans.json"
    );
    const data = await res.json();
    return data.list;
  }
}
