import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Speakers from "./components/Speakers";
import BounceLoader from "react-spinners/BounceLoader";
import UserAccount from "./pages/UserAccount";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Payment from "./components/Payment";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Updated routes: Login is separate at /admin/login, and admin panel is at /admin.
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />}>
            <Route index element={<Speakers />} />
          </Route>
        </Route>

        <Route path="/account/login" element={<LoginPage />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/payment" element={<Payment />} />
      </>
    )
  );

  return (
    <div className="app">
      {loading ? (
        <div className="loader-container">
          <BounceLoader color={"#fff"} loading={loading} size={40} />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
