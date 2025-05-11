import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './components/HeaderLayout';
import Slideshow from './components/Slideshow';
import CategorySection from './components/CategorySection';
import HowWeRateSec from './components/HowWeRateSec';
import BlogsPage from './components/Blog/BlogsPage';
import AboutPage from './components/AboutPage';
import KnowYourSkinTypePage from './components/Blog/KnowYourSkinTypePage';
import AcnePage from './components/Blog/AcnePage';
import HairFallRemediesPage from './components/Blog/HairFallRemediesPage';
import ProductDetails from './components/ProductDetails';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WishlistPage from './pages/WishlistPage';
import SubcategoryPage from './components/SubcategoryPage';
import Footer from './components/Footer';

import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <HeaderLayout />
        <Routes>

          {/* Home Page */}
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

          {/* Static Pages */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Blog Pages */}
          <Route path="/know-your-skin-type" element={<KnowYourSkinTypePage />} />
          <Route path="/Acne" element={<AcnePage />} />
          <Route path="/hair-fall-remedies" element={<HairFallRemediesPage />} />

          {/* Product Pages */}
          <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
          <Route path="/product/:category/:subcategory/:productId" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </Router>
    </WishlistProvider>
  );
}

export default App;
