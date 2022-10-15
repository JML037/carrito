import Home from './Components/Home';
import './App.scss';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div>
      <CartProvider>
      <Home/>
      </CartProvider>
      
    </div>
  );
}

export default App;
