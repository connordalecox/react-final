import './App.css';
import ProductPage from './Components/productsPage/ProductPage';
import { CartItem } from './context/ContextForCart';
import {Route, Routes} from 'react-router-dom';
import ProductDetails from './Components/productDetails/ProductDetails';
import CartPage from './Components/cartPage/CartPage';

function App() {
  return (
    <CartItem>
      <div className="App">
        <Routes>   
          <Route path='/' element={<ProductPage />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </div>
    </CartItem>
  );
}

export default App;
