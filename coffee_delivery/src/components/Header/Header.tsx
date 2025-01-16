import { NavLink } from "react-router-dom";
import logoCoffee from "../../assets/Logo-Coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
export function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-background">
      <img alt="Logo Coffee Delivery" src={logoCoffee} />
      <div className="flex justify-center items-center gap-x-4">
        <span className="flex justify-center text-text-s font-roboto items-center gap-x-1 text-purple bg-purple-light  px-3 py-2 rounded-md">
          <MapPin weight="fill" className="text-purple" size={24} />
          Porto Alegre, RS
        </span>
        
          <NavLink className="flex bg-yellow-light px-3 py-2 rounded-md cursor-pointer" to="/checkout">
          <ShoppingCart className="text-yellow-dark" size={24} weight="fill" />
          </NavLink>
    
      </div>
    </header>
  );
}
