import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";
import coffeeItem from "../../assets/CoffeeItem.svg";

interface CardProps {
  name: string;
  type: string[];
  legend: string;
  price: string;
}

export function Card(props: CardProps) {
  return (
    <div className="w-[300px] flex flex-col items-center bg-base-card rounded-bl-3xl rounded-tr-3xl rounded-tl-xl rounded-br-xl mt-20 px-5 py-3">
      <img className="-top-9 relative" src={coffeeItem} />
      <div className="flex items-center justify-center gap-x-2">
        {props.type.map((type) => {
          return (
            <span className="uppercase text-yellow-dark text-tag font-roboto bg-yellow-light px-4 py-2 rounded-2xl -mt-5 mb-3">
              {type}
            </span>
          );
        })}
      </div>
      <h1 className="text-title-s text-base-subtitle font-baloo mb-3">{props.name}</h1>
      <p className="text-text-s text-base-label">{props.legend}</p>
      <div className="w-full flex gap-x-8 justify-between items-end mt-10">
        <div className="flex items-end gap-x-1">
          <p className="text-text-s text-base-text mb-0.5">R$</p>
          <p className="text-title-m text-base-text">{props.price}</p>
        </div>
        <div className="w-full flex gap-x-2 ">
          <div className="flex justify-center items-center gap-x-2 bg-gray-300 px-4 py-2 rounded-md">
            <button>
              <Minus className="text-purple-dark" size={20} />
            </button>
            <span>1</span>
            <button>
              <Plus className="text-purple" size={20} />
            </button>
          </div>
          <span className="bg-purple-dark float-right px-3 py-2 rounded-md">
            <ShoppingCartSimple
              className="text-white cursor-pointer"
              size={24}
              weight="fill"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
