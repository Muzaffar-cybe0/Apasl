import { useState } from "react";
import "../sass/login.scss";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.username && login.password) {
      sessionStorage.setItem("loginKeys", JSON.stringify(login));
      toast.success("Login was successful", {
        position: "top-right", // Ensure it stays in the top-right corner
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } else {
      toast.error("Admin not found", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="container">
      {" "}
      {/* Wrapper to center form */}
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, username: e.target.value }))
            }
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) =>
              setLogin((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </div>

        <button
          type="submit"
          className="submit"
          disabled={!login.username || !login.password}
        >
          Login
        </button>
      </form>
      <ToastContainer /> 
    </div>
  );
}
