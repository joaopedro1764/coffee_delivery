import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import {  CoffeeContextProvider } from "./context/CoffeeContext";

function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  );
}

export default App;
