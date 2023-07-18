import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Main/Home'))
const Challenge = React.lazy(() => import('./components/Main/Challenge'))

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/challenge/:challenge" element={<Challenge />} /> 
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
