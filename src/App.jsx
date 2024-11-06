import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";

import CheckUp from "./OurServices_componets/CheckUp";
import Cardiogram from "./OurServices_componets/Cardiogram";
import Dna from "./OurServices_componets/Dna";
import BloodBank from "./OurServices_componets/BloodBank";
import ContactPage from "./pages/ContactPage";
import Appointment from "./pages/Appointment";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Navigate to="checkUp" replace />} />
          <Route path="checkUp" element={<CheckUp />} />
          <Route path="cardiogram" element={<Cardiogram />} />
          <Route path="dna" element={<Dna />} />
          <Route path="bloodBank" element={<BloodBank />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/appointment" element={<Appointment />} />
      </Route>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
