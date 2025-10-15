import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlanSelection.scss";
import type { Plan } from "../../../domain/entities/Plan";
import { PlanList } from "./PlanList";


interface FormData {
  name: string;
  lastName: string;
  birthDay: string;
}
export const calculateAge = (birthDay: string): number => {
  const [day, month, year] = birthDay.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
export const PlanSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"me" | "other" | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleSelect = (option: "me" | "other") => {
    setSelected(option);
    localStorage.setItem("planFor", option);
  };

  const handleSelectPlan = (plan: Plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    navigate("/summary");
  };

  return (
    <section className="plan-selection">
      <button onClick={() => navigate("/")} className="plan-selection__back">
        <img src="/icon-back.png" alt="Volver" /> Volver
      </button>

      <h1 className="plan-selection__title">
        {formData?.name} <span>¿Para quién deseas cotizar?</span>
      </h1>

      <p className="plan-selection__subtitle">
        Selecciona la opción que se ajuste más a tus necesidades.
      </p>

      <div className="plan-selection__cards">
        <div
          className={`plan-card ${selected === "me" ? "selected" : ""}`}
          onClick={() => handleSelect("me")}
        >
          <div className="plan-card__radio" />
          <img src="/me-icon.png" alt="Para mí" className="plan-card__icon" />
          <h3>Para mí</h3>
          <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
        </div>

        <div
          className={`plan-card ${selected === "other" ? "selected" : ""}`}
          onClick={() => handleSelect("other")}
        >
          <div className="plan-card__radio" />
          <img src="/other-icon.png" alt="Para alguien más" className="plan-card__icon" />
          <h3>Para alguien más</h3>
          <p>
            Realiza una cotización para uno de tus familiares o cualquier persona.
          </p>
        </div>
      </div>

      {selected && formData && (
        <div className="plan-selection__plans">
          <PlanList
            age={calculateAge(formData.birthDay)}
            isForOther={selected === "other"}
            onSelectPlan={handleSelectPlan}
          />
        </div>
      )}
    </section>
  );
};
