import { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import "../sass/userAccount.scss";

import User from "../assets/user.svg"

const UserAccount = () => {
  const { user, updateUser, logout } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    image: user?.image || "", // User's profile picture
  });

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-account">
      <header className="header">
        <div className="profile-info">
          <div className="avatar">{user?.name?.charAt(0)}</div>
          <span>{user?.name} {user?.surname}</span>
        </div>
        <nav className="nav">
          <button onClick={() => navigate("/home")} className="nav-btn">Home</button>
          <button onClick={logout} className="nav-btn logout">Logout</button>
        </nav>
      </header>
      <main className="content">
        <div className="content_child-1">
          <h2>Profile</h2>
          <div className="profile-picture">
            <img src={formData?.image || User} alt="Profile" />
            
          </div>
          {editing ? (
            <form onSubmit={handleSubmit} className="profile-form">
                <input type="file" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Surname:
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <div className="form-buttons">
                <button type="submit" className="save-btn save">Save</button>
                <button type="button" onClick={() => setEditing(false)} className="cancel-btn cancel">Cancel</button>
              </div>
            </form>
          ) : (
            <div className="profile-details">
             
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Surname:</strong> {user?.surname}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <button onClick={() => setEditing(true)} className="edit-btn edit">Edit Profile</button>
            </div>
          )}
        </div>

        <div className="content_child-2">
          <h2>Ticket Details</h2>
          <p><strong>Ticket Status:</strong> {user?.ticket ? "Purchased" : "Not purchased yet"}</p>
          <p><strong>Date Bought:</strong> {user?.ticket?.date || "No time"}</p>
          <p><strong>Ticket Price:</strong> {user?.ticket?.price ? `$${user.ticket.price}` : "No ticket"}</p>
        </div>
      </main>
      <footer className="footer">&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default UserAccount;
