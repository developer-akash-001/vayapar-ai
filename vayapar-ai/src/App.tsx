import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import ReviewsPage from "./pages/ReviewsPage";
import FaqPage from "./pages/FaqPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Register from "./pages/Register";
import TermsConditions from "./pages/TermsConditions";

import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./dashboard/Overview";
import Reviews from "./dashboard/Reviews";
import Posts from "./dashboard/Posts";
import Analytics from "./dashboard/Analytics";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
        <Route path="/dashboard/reviews" element={<DashboardLayout><Reviews /></DashboardLayout>} />
        <Route path="/dashboard/posts" element={<DashboardLayout><Posts /></DashboardLayout>} />
        <Route path="/dashboard/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
