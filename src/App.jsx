import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import NotFoundPage from "./components/notFound";
import ErrorBoundary from "./components/errorBoundary";
import { FaArrowUp } from "react-icons/fa";
import PreLoader from "./components/preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary> {/* Wrap the entire app in ErrorBoundary */}
      {isLoading ? (
        <PreLoader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <Routes>
            {/* Define route for the landing page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed z-50 bottom-10 right-10 p-3 bg-primary rounded-full shadow-lg text-white hover:bg-secondary"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={24} />
          </button>
        </Router>
      )}
    </ErrorBoundary>
  );
}

export default App;
