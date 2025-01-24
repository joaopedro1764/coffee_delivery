import { NavLink } from "react-router-dom";
import logoCoffee from "../../../public/images/Logo-Coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  function redirectToCart() {
    if (cart.length === 0) {
      alert("Adicione um café no carrinho!");
      return;
    }
    navigate("/cart");
  }

  return (
    <header className="w-full flex justify-between items-center bg-background">
      <NavLink to="/">
        <img alt="Logo Coffee Delivery" src={logoCoffee} />
      </NavLink>
      <div className="flex justify-center items-center gap-x-4">
        <span className="flex justify-center text-text-s font-roboto items-center gap-x-1 text-purple bg-purple-light  px-3 py-2 rounded-md">
          <MapPin weight="fill" className="text-purple" size={24} />
          São Paulo, SP
        </span>

        <button onClick={redirectToCart}>
          <div className="relative h-12 flex items-center justify-center w-12 bg-yellow-light px-3 py-2 rounded-md cursor-pointer">
            {cart.length !== 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center text-white font-bold text-sm w-5 h-5 rounded-full bg-yellow-dark">
                {cart.length}
              </span>
            )}
            <ShoppingCart
              className="text-yellow-dark"
              size={24}
              weight="fill"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
