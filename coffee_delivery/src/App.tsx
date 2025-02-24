import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import {  CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
