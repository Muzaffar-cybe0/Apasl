import { useState } from "react";
import axios from "axios";
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
    count: 1,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.count <= 0)
      newErrors.count = "At least one ticket is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // const getExchangeRate = async () => {
  //   const res = await fetch(
  //     "https://api.exchangerate.host/latest?base=USD&symbols=UZS"
  //   );
  //   const data = await res.json();
  //   return data.rates.UZS;
  // };

  const startPayment = async () => {
    try {
      const data = {
        octo_shop_id: 27137,
        octo_secret: "3be1f3d7-9a10-4e8a-af18-5ee82c428baa",
        shop_transaction_id: "order_" + Date.now(),
        auto_capture: true,
        // test: true,
        init_time: new Date().toISOString().slice(0, 19).replace("T", " "),
        user_data: {
          user_id: formData.fullname,
          phone: formData.phone,
          email: formData.email,
        },
        total_sum: formData.count * 2574782, // Ticket price * count
        currency: "UZS",
        description: "TEST_PAYMENT",
        basket: [
          { count: formData.count, position_desc: "VIP", price: 2574782.0 },
        ],
        payment_methods: [
          { method: "bank_card" },
          { method: "uzcard" },
          { method: "humo" },
        ],
        tsp_id: 18,
        return_url: "octo.uz",
        notify_url: "https://notify-url.uz",
        language: "uz",
        ttl: 15,
      };

      const response = await axios.post(
        "https://secure.octo.uz/prepare_payment",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.octo_pay_url) {
        setActiveModal(false);
        window.open(response.data.octo_pay_url, "_blank");
      } else {
        alert("Payment initialization failed. Please try again.");
      }
    } catch (error) {
      alert("Error starting payment. Please try again.");
      console.error("Error starting payment", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      startPayment();
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

              <input
                type="number"
                name="count"
                value={formData.count}
                onChange={handleChange}
                placeholder="Number of tickets"
                min="1"
              />
              {errors.count && <p className="error">{errors.count}</p>}

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
