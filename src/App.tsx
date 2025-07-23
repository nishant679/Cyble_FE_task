// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import Products from './pages/Products';
import AddProductPage from './pages/AddProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route element={<AppLayout />}>
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
