import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import HomePage from "./pages/HomePage";
import RAppBar from "./components/RAppBar";
import NotFound from "./pages/NotFound";
import DetailModel from "./pages/DetailModal";
import LoginModal from "./pages/LoginModal";

export default function App() {
  // let location = useLocation();
  let state = location.state;
  return (
    <>
      <BrowserRouter>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<RAppBar />}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailModel />} />
            {/* <Route path="/login" element={<LoginModal />} /> */}
            <Route element={<ProtectedRoutes />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="/login" element={<LoginModal />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}
