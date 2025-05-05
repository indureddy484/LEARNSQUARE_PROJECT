

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/HeaderLayout";
import Slideshow from "./components/Slideshow";
import CategorySection from "./components/CategorySection";
import SubcategoryPage from "./pages/SubcategoryPage";
import HowWeRateSec from './components/HowWeRateSec';

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
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
        <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
