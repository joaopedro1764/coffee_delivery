import { CheckSquare, Plus, Minus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
interface CardProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}
export function Card({ coffee }: CardProps) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <div className="w-[300px] flex flex-col items-center bg-base-card rounded-bl-3xl rounded-tr-[2.5rem] rounded-tl-md rounded-br-xl mt-20 px-5 py-3">
      <img className="-top-9 relative" src={coffee.image} alt="TESTE" />
      <div className="flex items-center justify-center gap-x-2">
        {coffee.tags.map((tag) => {
          return (
            <span key={tag} className="uppercase text-yellow-dark text-tag font-roboto bg-yellow-light px-4 py-2 rounded-2xl -mt-5 mb-3">
              {tag}
            </span>
          );
        })}
      </div>
      <h1 className="text-title-s text-base-subtitle font-baloo mb-3">
        {coffee.title}
      </h1>
      <p className="text-text-s text-base-label">{coffee.description}</p>
      <div className="w-full flex gap-x-8 justify-between items-end mt-10">
        <div className="flex items-end gap-x-1">
          <p className="text-text-s text-base-text mb-0.5">R$</p>
          <p className="text-title-m text-base-text">
            {" "}
            {coffee.price.toFixed(2)}
          </p>
        </div>
        <div className="w-full flex gap-x-2 ">
          <div className="flex justify-center items-center gap-x-2 bg-gray-300 px-4 py-2 rounded-md">
            <button onClick={decrementQuantity}>
              <Minus className="text-purple-dark" size={20} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus className="text-purple" size={20} />
            </button>
          </div>
          <button
            className={`w-10 h-10 flex justify-center items-center rounded-md ${
              isItemAdded ? "bg-yellow-dark" : "bg-purple-dark"
            }`}
            disabled={isItemAdded}
            onClick={handleAddItem}
          >
            {isItemAdded ? (
              <CheckSquare weight="fill" size={24} className="text-white" />
            ) : (
              <ShoppingCart className="text-white" size={24} weight="fill" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
