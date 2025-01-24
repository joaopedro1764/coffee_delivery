import coffeeImg from "../../public/images/Coffe-Image.svg"
import { ShoppingCart, Coffee, Timer, Package } from "phosphor-react";
import { Card } from "../components/Card/Card";
import {coffees} from "../data.json"
export function Home() {

  return (
    <>
      <section className="w-full flex gap-8 justify-between mt-20">
        <div className="flex flex-col">
          <span className="text-title-xl font-baloo">
            Encontre o café perfeito{" "}
          </span>
          <span className="text-title-xl font-baloo">
            para qualquer hora do dia
          </span>
          <p className="text-text-l font-roboto text-base-subtitle mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="w-full grid grid-rows-2 grid-cols-2 gap-3 mt-10 gap-y-5">
            <div className="col-span-1 flex items-center gap-x-2">
              <span className="w-12 h-12 flex justify-center items-center bg-yellow-dark px-3 py-2 rounded-full">
                <ShoppingCart className="text-white" size={24} weight="fill" />
              </span>
              <span className="text-base-text font-roboto">
                Compra simples e segura
              </span>
            </div>
            <div className="col-span-1 flex items-center gap-x-2">
              <span className="w-12 h-12 flex justify-center items-center bg-base-text px-3 py-2 rounded-full">
                <Package className="text-white" size={24} weight="fill" />
              </span>
              <span className="text-base-text font-roboto">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="col-span-1 flex items-center gap-x-2">
              <span className="w-12 h-12 flex justify-center items-center bg-yellow px-3 py-2 rounded-full">
                <Timer className="text-white" size={24} weight="fill" />
              </span>
              <span className="text-base-text font-roboto">
                Entrega Rápida e restreada
              </span>
            </div>
            <div className="col-span-1 flex items-center gap-x-2">
              <span className="w-12 h-12 flex justify-center items-center bg-purple px-3 py-2 rounded-full">
                <Coffee className="text-white" size={24} weight="fill" />
              </span>
              <span className="text-base-text font-roboto">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
      
          <img src={coffeeImg} alt="Image Coffee Delivery" />
       
      </section>
      <h1 className="text-title-l font-baloo mt-20">Nossos cafés</h1>
      <main className="grid justify-center items-center grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 2xl:grid-cols-4">
        {coffees.map((coffee) => {
          return <Card key={coffee.id} coffee={coffee}/>;
        })}
      </main>
    </>
  );
}
