import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./components/Main/Home'))

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/challenge/:challenge-name" element="" /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
