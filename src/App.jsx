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
import SpeakerDetail from "./pages/SpeakerDetail";
import Speakers from "./components/Speakers";
import BounceLoader from "react-spinners/BounceLoader";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/home" replace />} />

          <Route path="home" element={<Home />}>
            <Route index element={<Speakers />} />
          </Route>
          <Route path="home/speaker/:itemId" element={<SpeakerDetail />} />
        </Route>

        <Route path="admin" element={<AdminPanel />}>
          <Route path="login" element={<Login />} />
        </Route>
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
