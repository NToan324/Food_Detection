import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import LandingFoodPage from "./views/LandingFoodPage";
import FoodDetection from "./views/FoodDetection";
import Prediction from "./views/Prediction";
import Home from "./views/LandingFoodPage";
import About from "../src/screens/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingFoodPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Food" element={<LandingFoodPage />} />
        <Route path="/Explore" element={<LandingFoodPage />} />
        <Route path="/History" element={<LandingFoodPage />} />

        <Route path="/food-detection" element={<FoodDetection />} />
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
