import { useState } from "react";
import "../sass/ticket.scss";
import "animate.css";
import { useTranslation } from "react-i18next";

export default function Ticket() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with payment
      console.log("Payment processing...");
    }
  };

  return (
    <div className="ticket">
      <div className="ticket_wrapper1">
        <p>{t("ticket1")}</p>
        <h1>{t("ticket2")}</h1>
      </div>

      <div className="card_wrapper2">
        <div className="grid-container">
          <div className="card" style={{ backgroundColor: "#fff5e6" }}>
            <h2>{t("ticket4")}</h2>
            <p className="price">$200</p>
            <button className="btn" onClick={() => setActiveModal(true)}>
              {t("ticket3")}
            </button>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="modalOverlay">
          <div className="modalContent animate__animated animate__slideInDown">
            <button
              className="closeButton"
              onClick={() => setActiveModal(false)}
            >
              ✕
            </button>
            <h1>Complete Your Purchase</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder={t("ticketModal1")}
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("ticketModal2")}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("ticketModal3")}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <button className="paymentBtn" type="submit">
                {t("ticketModal4")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
