import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ProtectedRoutes from "./pages/utils/ProtectedRoutes";
import HomePage from "./pages/HomePage";
import RAppBar from "./components/RAppBar";
import NotFound from "./pages/NotFound";
import LoginModal from "./pages/LoginModal";
import { useState } from "react";
import JobModal from "./pages/JobModal";
import jobs from "./jobs.json";

export default function App() {
  const [user, setUser] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  let location = useLocation();
  let state = location.state;

  return (
    <>
      <RAppBar user={user} setUser={setUser} />
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={
            <HomePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              jobs={jobs}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/login" element={<LoginModal setUser={setUser} />} />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/jobs/:id" element={<JobModal />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
