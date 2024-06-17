import './App.css';
import { Footer } from './Components/Footer/Footer';
import { NavbarBlock } from './Components/Navbar/Navbar';
import { Products } from './Pages/Products'; 
import ProductDetail from './Pages/ProductDetail';
import { Index } from './Pages/Index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarBlock />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mattress" element={<Products/>} />
          <Route path="/bedroom" element={<Products/>} />
          <Route path="/dining" element={<Products/>} />
          <Route path="/furnishing" element={<Products/>} />
          <Route path="/kitchen" element={<Products/>} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
