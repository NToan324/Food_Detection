import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import LandingFoodPage from "./views/LandingFoodPage";
import Prediction from "./views/Prediction";
import Home from "./views/LandingFoodPage";
import About from "../src/screens/About";
import Login from "../src/screens/Login";
import Register from "./screens/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingFoodPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Food" element={<LandingFoodPage />} />
        <Route path="/Explore" element={<LandingFoodPage />} />
        <Route path="/History" element={<LandingFoodPage />} />
        <Route path="/result/:id" element={<Prediction />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </Router>
  );
}

export default App;
