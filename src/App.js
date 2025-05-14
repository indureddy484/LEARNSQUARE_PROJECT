import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './components/HeaderLayout';
import Slideshow from './components/Slideshow';
import CategorySection from './components/CategorySection';
import HowWeRateSec from './components/HowWeRateSec';
import BlogsPage from './components/BlogsPage';
import AboutPage from './components/AboutPage';
import KnowYourSkinTypePage from './components/KnowYourSkinTypePage';
import AcnePage from './components/AcnePage';
import HairFallRemediesPage from './components/HairFallRemediesPage';
import ProductDetails from './components/ProductDetails';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WishlistPage from './pages/WishlistPage';
import SubcategoryPage from './components/SubcategoryPage';
import Footer from './components/Footer';
import FooterProductsGrid from './components/FooterProductsGrid';
import SearchResultsPage from './pages/SearchResultPage';
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
          <Route path="/search" element={<SearchResultsPage />} />

          {/* Blog Pages */}
          <Route path="/know-your-skin-type" element={<KnowYourSkinTypePage />} />
          <Route path="/Acne" element={<AcnePage />} />
          <Route path="/hair-fall-remedies" element={<HairFallRemediesPage />} />

          {/* Product Details (specific route first) */}
          <Route path="/product/:category/:subcategory/:productId" element={<ProductDetails />} />
          <Route path="/product/:productId" element={<ProductDetails />} />

          {/* Subcategory Page (should come after product route) */}
          <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
        </Routes>

        <FooterProductsGrid />
        <Footer />
      </Router>
    </WishlistProvider>
  );
}

export default App;
