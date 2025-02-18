import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "../admin_Scss/loginPage.scss";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "", // Add name field
    surname: "", // Add surname field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, surname } = formData;
    setLoading(true);
    const success = login(email, password); // Pass only email and password for now, but you can include the name and surname in the login logic if necessary.
    setLoading(false);
    if (success) {
      alert(`Welcome, ${name} ${surname}!`); // Show full name in welcome message
      navigate("/account");
    } else {
      alert("Invalid email or password.");
    }
  };

  const goToSignUp = () => {
    navigate("/account/signup");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Name input */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Surname input */}
          <div className="form-group">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button className="signup-link" onClick={goToSignUp}>
          Don`t have an account? Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
