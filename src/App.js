import React, { Suspense, useState, useEffect } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import PacmanLoader from "react-spinners/ClipLoader";
import './App.css';


const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyContact = React.lazy(() => import('./pages/Contact'));
const LazyMore = React.lazy(() => import('./pages/More'));

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 3500; // Adjust the delay time in milliseconds (e.g., 3000 for 3 seconds)

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="loading-screen">
      <PacmanLoader color="#ffffff" loading={isLoading} size={150} />
    </div>
  ) : null;
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/Contact" element={<LazyContact />} />
            <Route path="/More" element={<LazyMore />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
