import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import ListProducts from './pages/ListProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/listProducts" element={<ListProducts />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
