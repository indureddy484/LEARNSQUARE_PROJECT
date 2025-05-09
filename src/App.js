import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
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

      </Routes>
    </Router>
  );
}

export default App; 