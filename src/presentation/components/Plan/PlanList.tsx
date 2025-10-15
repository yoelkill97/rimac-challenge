import { useEffect, useState } from "react";
import { GetPlansUseCase } from "../../../domain/usecases/GetPlansUseCase";
import { PlanRepositoryImpl } from "../../../data/repositories/PlanRepositoryImpl";
import type { Plan } from "../../../domain/entities/Plan";

import styles from "./PlanList.module.scss"; // Asegúrate que el archivo exista

import houseIcon from "/house.png";
import clinicIcon from "/clinic.png";
import checkIcon from "/house.png";

interface Props {
  age: number;
  isForOther: boolean;
  onSelectPlan: (plan: Plan) => void;
}

const getIconForPlan = (name: string) => {
  if (name.includes("Clínica")) return clinicIcon;
  if (name.includes("Chequeo")) return checkIcon;
  return houseIcon;
};

export const PlanList = ({ age, isForOther, onSelectPlan }: Props) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const useCase = new GetPlansUseCase(new PlanRepositoryImpl());
      const allPlans = await useCase.execute();
      const filtered = allPlans
        .filter((plan) => plan.age >= age)
        .map((plan) => ({
          ...plan,
          price: isForOther ? parseFloat((plan.price * 0.95).toFixed(2)) : plan.price,
        }));
      setPlans(filtered);
    };

    fetchPlans();
  }, [age, isForOther]);

  return (
    <div className={styles["plan-list"]}>
      {plans.map((plan, idx) => (
        <div key={idx} className={styles["plan-card"]}>
          <div className={styles["plan-card__header"]}>
            <h3 className={styles["plan-card__title"]}>{plan.name}</h3>
            <img
              src={getIconForPlan(plan.name)}
              alt="icono"
              className={styles["plan-card__icon"]}
            />
          </div>

          <div className={styles["plan-card__price"]} style={{ marginTop: "1rem" }}>
            <span>COSTO DEL PLAN</span>
            <br />
            <strong>S/ {plan.price.toFixed(2)} al mes</strong>
            <hr />
          </div>
          <ul className={styles["plan-card__desc"]}>
            {plan.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>

          <button className={styles["plan-card__button"]} onClick={() => onSelectPlan(plan)}>
            Seleccionar Plan
          </button>
        </div>
      ))}
    </div>
  );
};
