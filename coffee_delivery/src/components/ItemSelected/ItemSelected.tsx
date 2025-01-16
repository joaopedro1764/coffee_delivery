import { Minus, Plus, Trash } from "phosphor-react";
import coffeImg from "../../assets/CoffeeItem.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

interface ItemCardProps {
  id: string;
  name: string;
  type: string[];
  legend: string;
  price: string;
}

export function ItemSelected(props: ItemCardProps) {
  const { handleRemoveCoffee } = useContext(CoffeeContext);
  return (
    <>
      <div className="flex gap-x-2 justify-between items-start mt-5">
        <img className="w-14 h-14" src={coffeImg} />
        <div className="flex flex-col">
          <span className="text-text-m font-roboto text-base-subtitle">
            {props.name}
          </span>
          <div className="flex gap-2 mt-3">
            <div className="flex gap-2 items-center bg-base-button px-3 py-2 rounded-md">
              <button>
                <Minus className="text-purple" size={20} />
              </button>
              <span className="text-base-title font-roboto text-text-m">1</span>
              <button>
                <Plus className="text-purple" size={20} />
              </button>
            </div>
            <button
              onClick={() => handleRemoveCoffee(props.id)}
              className="flex items-center bg-base-button px-2 py-2 rounded-md gap-2 text-base-text text-text-s font-roboto"
            >
              <Trash className="text-purple" size={20} />
              REMOVER
            </button>
          </div>
        </div>
        <span className="text-title-m text-base-text font-roboto">
          {props.price}
        </span>
      </div>
      <div className="h-[1px] mt-8 w-full bg-base-button rounded-sm" />
    </>
  );
}
