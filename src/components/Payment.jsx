import { useState } from "react";
import axios from "axios";
import "../sass/payment.scss";

const Payment = () => {
  const [step, setStep] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("");
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvv: "" });
  const [otp, setOtp] = useState("");

  const startPayment = async () => {
    try {
      const data = {
        octo_shop_id: 27137,
        octo_secret: "3be1f3d7-9a10-4e8a-af18-5ee82c428baa",
        shop_transaction_id: "order_" + Date.now(),
        auto_capture: true,
        test: true,
        init_time: new Date().toISOString().slice(0, 19).replace("T", " "),
        user_data: {
          user_id: "Johnny Depp",
          phone: "998901234567",
          email: "octo@mail.com",
        },
        total_sum: 2500.0,
        currency: "UZS",
        description: "TEST_PAYMENT",
        basket: [
          { count: 2, position_desc: "VIP", price: 1000.0 },
          { count: 1, position_desc: "VIP", price: 500.0 },
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

      setPaymentUrl(response.data.paymentUrl);
      setStep(2);
    } catch (error) {
      console.error("Error starting payment", error);
    }
  };

  const submitCardDetails = async () => {
    try {
      await axios.post("/api/submit_card", cardData);
      setStep(3);
    } catch (error) {
      console.error("Error submitting card details", error);
    }
  };

  const submitOtp = async () => {
    try {
      await axios.post("/api/verify_otp", { otp });
      setStep(4);
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div className="payment-container">
      {step === 1 && <button onClick={startPayment}>To'lovni boshlash</button>}
      {step === 2 && (
        <div>
          <h3>Karta ma'lumotlarini kiriting</h3>
          <input
            type="text"
            placeholder="Karta raqami"
            onChange={(e) =>
              setCardData({ ...cardData, number: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Amal qilish muddati"
            onChange={(e) =>
              setCardData({ ...cardData, expiry: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="CVV"
            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
          />
          <button onClick={submitCardDetails}>Tasdiqlash</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>OTP kodni kiriting</h3>
          <input
            type="text"
            placeholder="OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={submitOtp}>Tasdiqlash</button>
        </div>
      )}
      {step === 4 && <h3>To'lov muvaffaqiyatli amalga oshirildi!</h3>}
    </div>
  );
};

export default Payment;
