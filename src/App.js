import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Navbar from './components/Navbar';
import Product from './Pages/Product';
import Footer from './components/Footer';
import Error404 from './Pages/Error404';
function App() {
  return (
    <Router>
    <div className="App">
  

 <Navbar />

<Routes>
<Route path="/Home" element={<Home />} />

<Route path="/about" element={<About />} />
<Route path="/products" element={<Products />} />
<Route path="/product/:id" element={<Product />} />

<Route path="*" element={<Error404 />} />

</Routes>
</div>
<Footer />

</Router>

  );
}

export default App;
