import { useNavigate } from "react-router-dom";
import "./StepIndicator.scss";

export const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const navigate = useNavigate();
  return (
    <div className="plan-stepper">
      <div
        onClick={() => navigate("/plans")}
        className={`step ${currentStep === 1 ? "active" : ""}`}
      >
        <div className="step__number">1</div>
        <div className="step__label">Planes y coberturas</div>
      </div>
      <div className="step__separator">•••</div>
      <div
        onClick={() => navigate("/summary")}
        className={`step ${currentStep === 2 ? "active" : ""}`}
      >
        <div className="step__number">2</div>
        <div className="step__label">Resumen</div>
      </div>
    </div>
  );
};
