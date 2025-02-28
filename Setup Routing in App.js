import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutDetail from "./components/CheckoutDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/details" element={<CheckoutDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
