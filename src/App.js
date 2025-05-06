import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/HeaderLayout";
import Slideshow from "./components/Slideshow";
import CategorySection from "./components/CategorySection";
import SubcategoryPage from "./pages/SubcategoryPage";
import HowWeRateSec from './components/HowWeRateSec';
import LoginPage from './pages/LoginPage';  // Add the LoginPage import
import SignupPage from './pages/SignupPage';  // Add the SignupPage import

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={
          <>
            <Slideshow />
            <CategorySection />
            <HowWeRateSec />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
