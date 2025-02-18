// AuthContext.jsx
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register a new user
  const register = (name, surname, email, password) => {
    const newUser = { name, surname, email, password, ticketStatus: false };
    // Save user in localStorage
    localStorage.setItem(email, JSON.stringify(newUser));
    setUser(newUser);  // Set current user to the newly registered user
    return true;
  };

  // Log in an existing user
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem(email)); // Get user from localStorage using email
    if (storedUser && storedUser.password === password) {
      setUser(storedUser);  // Set the current user to the logged-in user
      return true;
    }
    return false;
  };

  // Logout the current user
  const logout = () => {
    setUser(null);
    localStorage.removeItem(user?.email); // Remove the current user from localStorage
  };

  // Update user info
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem(updatedUser.email, JSON.stringify(updatedUser)); // Update user data in localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
