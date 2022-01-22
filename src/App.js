import * as React from 'react';
import Provider from './store/Provider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import ListProducts from './pages/ListProducts';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/listProducts" element={<ListProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
