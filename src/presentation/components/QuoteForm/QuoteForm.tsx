
import React, { useState } from 'react';
import styles from './QuoteForm.module.scss';
import { useNavigate } from "react-router-dom";
import { SaveUserUseCase } from "../../../domain/usecases/SaveUserData";
import { UserDataStorage } from "../../../data/storage/UserDataStorage";
const QuoteForm: React.FC = () => {
  const navigate = useNavigate();
  const [dniType, setDniType] = useState('DNI');
  const [dniNumber, setDniNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptComms, setAcceptComms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const repository = new UserDataStorage();
    const saveUserData = new SaveUserUseCase(repository);
    await saveUserData.execute();
    navigate("/plans");
  };
  
  return (
    <div className={styles.quoteForm}>
      <span className={styles.badge}>Seguro Salud Flexible</span>
      <h2 className={styles.title}>Creado para ti y tu familia</h2>
      <p className={styles.description}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y
        recibe nuestra asesoría. 100% online.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.dniType}>
            <select
              value={dniType}
              onChange={(e) => setDniType(e.target.value)}
              className={styles.select}
            >
              <option value="DNI">DNI</option>
              <option value="CE">CE</option>
            </select>
          </div>
          <div className={styles.dniNumber}>
            <input
              type="text"
              placeholder="Nro. de documento"
              value={dniNumber}
              onChange={(e) => setDniNumber(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="tel"
            placeholder="Celular"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={(e) => setAcceptPrivacy(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            Acepto lo Política de Privacidad
          </label>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={acceptComms}
              onChange={(e) => setAcceptComms(e.target.checked)}
            />
            <span className={styles.checkmark}></span>
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
        <p className={styles.termsLink}>
          <a href="#">Aplicar Términos y Condiciones.</a>
        </p>

        <button type="submit" className={styles.quoteButton}>
          Cotiza aquí
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;