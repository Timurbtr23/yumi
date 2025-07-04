import { Routes, Route } from 'react-router-dom';
import ShopperLanding from './pages/ShopperLanding';
import MerchantLanding from './pages/MerchantLanding';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopperLanding />} />
      <Route path="/merchant" element={<MerchantLanding />} />
    </Routes>
  );
};

export default App; 