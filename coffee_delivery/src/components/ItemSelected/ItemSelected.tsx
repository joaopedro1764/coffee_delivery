import { Minus, Plus, Trash } from "phosphor-react";
import { Item } from "../../reducer/reducer";
import { coffees } from "../../data.json";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function ItemSelected(coffeeOrder: Item) {

  const itemsOrder = coffees.find((coffee) => {
    return coffee.id === coffeeOrder.id;
  });

 
  const { removeItem, decrementItemQuantity, incrementItemQuantity } = useContext(CartContext);

  return (
    <>
      <div className="flex gap-x-2 justify-between items-start mt-5">
        <img className="w-14 h-14" src={itemsOrder?.image} />
        <div className="flex flex-col">
          <span className="text-text-m font-roboto text-base-subtitle">
            {itemsOrder?.title}
          </span>
          <div className="flex gap-2 mt-3">
            <div className="flex gap-2 items-center bg-base-button px-3 py-2 rounded-md">
              <Minus
                onClick={() => decrementItemQuantity(itemsOrder!.id)}
                className="text-purple cursor-pointer"
                size={20}
              />

              <span className="text-base-title font-roboto text-text-m">
                {coffeeOrder.quantity}
              </span>

              <Plus
                onClick={() => incrementItemQuantity(itemsOrder!.id)}
                className="text-purple cursor-pointer"
                size={20}
              />
            </div>
            <button
              onClick={() => removeItem(itemsOrder!.id)}
              className="flex items-center bg-base-button px-2 py-2 rounded-md gap-2 text-base-text text-text-s font-roboto"
            >
              <Trash className="text-purple" size={20} />
              REMOVER
            </button>
          </div>
        </div>
        <span className="text-title-m text-base-text font-roboto">
          R$ {itemsOrder?.price.toFixed(2)}
        </span>
      </div>
      <div className="h-[1px] mt-8 w-full bg-base-button rounded-sm" />
    </>
  );
}
