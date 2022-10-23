import './App.css';
import ProductPage from './Components/productsPage/ProductPage';
import { CartItem } from './context/ContextForCart';

function App() {
  return (
    <CartItem>
      <div className="App">
        <ProductPage />
      </div>
    </CartItem>
  );
}

export default App;
