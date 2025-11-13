import { useState } from "react";
import "./CheckoutForm.css";

export default function Checkout(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCheckout(formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function clearForm() {
    setFormData({ name: "", email: "", phone: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Ingresa tus datos personales</h2>

      <label>
        Nombre
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Juan Pérez"
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="juan@mail.com"
          required
        />
      </label>

      <label>
        Teléfono
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          placeholder="11 2345-6789"
          required
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          Confirmar
        </button>
        <button
          type="button"
          onClick={clearForm}
          className="btn-clear"
        >
          Limpiar Formulario
        </button>
      </div>
    </form>
  );
}