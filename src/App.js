import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import HeaderLayout from './components/HeaderLayout';
import Slideshow from './components/Slideshow';
import CategorySection from './components/CategorySection';
import HowWeRateSec from './components/HowWeRateSec';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import BlogCard from './components/BlogCard';
import KnowYourSkinTypePage from './components/KnowYourSkinTypePage';
import AcnePage  from './components/AcnePage';
import HairFallRemediesPage from './components/HairFallRemediesPage';


import blog1 from './assets/images/blog1.jpg'; // Corrected import
=======
import HeaderLayout from "./components/HeaderLayout";
import Slideshow from "./components/Slideshow";
import CategorySection from "./components/CategorySection";
import SubcategoryPage from "./components/SubcategoryPage";
import HowWeRateSec from "./components/HowWeRateSec";
import ProductDetails from './components/ProductDetails';
import LoginPage from './pages/LoginPage';  // Add the LoginPage import
import SignupPage from './pages/SignupPage';  // Add the SignupPage import
import Footer  from './components/Footer';

>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
<<<<<<< HEAD
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Slideshow />
              <CategorySection />
              <HowWeRateSec />
            </>
          }
        />
        
        {/* Blogs page route */}
        <Route path="/blogs" element={<BlogsPage />} />
        
        {/* About page route */}
        <Route path="/about" element={<AboutPage />} />

        
        
        {/* Specific page for Know Your Skin Type */}
        <Route path="/know-your-skin-type" element={<KnowYourSkinTypePage />} />
        
        {/* Route for the Acne page */}
        <Route path="/Acne" element={<AcnePage />} />
        <Route path="/hair-fall-remedies" element={<HairFallRemediesPage />} />

=======
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
        <Route path="/product/:category/:subcategory/:productId" element={<ProductDetails />} />
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 