import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components

import LandingPage from './pages/landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<LandingPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;