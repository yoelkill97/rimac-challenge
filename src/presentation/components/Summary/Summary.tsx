import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Summary.scss";

interface FormData {
  name: string;
  lastName: string;
  birthDay: string;
}

interface selectedPlan {
  age: number;
  description: string[];
  name: string;
  price: number;
}

export const Summary = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<selectedPlan | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }

    const plan = localStorage.getItem("selectedPlan");
    if (plan) setSelectedPlan(JSON.parse(plan));
  }, []);

  return (
    <>
      <section className="resumen">
        <button className="resumen__back" onClick={() => navigate(-1)}>
          <img src="/icon-back.png" alt="Volver" />
          Volver
        </button>

        <h2 className="resumen__title">Resumen del seguro</h2>
        <br />
        <br />
        <div className="resumen__card">
          <div className="resumen__subtitle">PRECIOS CALCULADOS PARA:</div>
          <div className="resumen__user">
            👤 {formData?.name} {formData?.lastName}
          </div>
          <hr />
          <div className="resumen__info">
            <div className="label">Responsable de pago</div>
            <p>DNI: 44888888</p>
            <p>Celular: 513026147</p>

            <div className="label" style={{ marginTop: "1rem" }}>
              Plan elegido
            </div>
            <p>{selectedPlan?.name}</p>
            <p>Costo del Plan: S/{selectedPlan?.price} al mes</p>
          </div>
        </div>
      </section>
    </>
  );
};
