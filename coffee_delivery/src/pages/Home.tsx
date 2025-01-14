import coffeeImg from "../assets/Coffe-Image.svg";
import { ShoppingCart, Coffee, Timer, Package } from "phosphor-react";
import { Card } from "../components/Card/Card";
export function Home() {

  interface CardProps {
    name: string;
    type: string[];
    legend: string;
    price: string;
  }

  const cards:CardProps[] = [
    {
      name: "Expresso Tradicional",
      type: ["Tradicional"],
      legend: "O tradicional café feito com água quente e grãos moídos",
      price: "9,90",
    },
    {
      name: "Expresso Americano",
      type: ["Tradicional"],
      legend: "Expresso diluído, menos intenso que o tradicional",
      price: "9,90",
    },
    {
      name: " Expresso Cremoso",
      type: ["Tradicional"],
      legend: "Café expresso tradicional com espuma cremosa",
      price: "9,90",
    },
    {
      name: " Expresso Gelado",
      type: ["Tradicional", "Gelado"],
      legend: "Bebida preparada com café expresso e cubos de gelo",
      price: "9,90",
    },
    {
      name: "Café com Leite",
      type: ["Tradicional", "Com leite"],
      legend: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9,90",
    },
    {
      name: "Latte",
      type: ["Tradicional", "Com leite"],
      legend: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
    },
    {
      name: "Capuccino",
      type: ["Tradicional", "Com leite"],
      legend: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "9,90",
    },
    {
      name: "Macchiato",
      type: ["Tradicional", "Com leite"],
      legend: "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9,90",
    },
    {
      name: "Chocolate Quente",
      type: ["Especial", "Com leite"],
      legend: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9,90",
    },
    {
      name: "Cubano",
      type: ["Especial", "Alcólico", "Com leite"],
      legend: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9,90",
    },
    {
      name: "Havaiano",
      type: ["Especial"],
      legend: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
    },
    {
      name: "Árabe",
      type: ["Especial"],
      legend: "Bebida preparada com grãos de café árabe e especiarias",
      price: "9,90",
    },
    {
      name: "Irlandês",
      type: ["Especial"],
      legend: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
    },
  ]

  return (
    <>
      <section className="w-full flex mt-20">
        <div className="flex flex-col w-1/2">
          <span className="text-title-xl font-baloo">Encontre o café perfeito </span>
          <span className="text-title-xl font-baloo">para qualquer hora do dia</span>
          <p className="text-text-l font-roboto text-base-subtitle mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="w-full grid grid-rows-2 grid-cols-2 mt-10 gap-y-5">
            <div className="col-span-1 flex items-center gap-x-2">
              <span className="w-12 h-12 flex justify-center items-center bg-yellow-dark px-3 py-2 rounded-full">
                <ShoppingCart className="text-white" size={24} weight="fill" />
              </span>
              <span className="text-base-text font-roboto">Compra simples e segura</span>
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
              <span className="text-base-text font-roboto">Entrega Rápida e restreada</span>
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
        <div className="w-1/2">
          <img className="ml-40" src={coffeeImg} alt="Image Coffee Delivery" />
        </div>
      </section>
      <h1 className="text-title-l font-baloo mt-20">Nossos cafés</h1>
      <main className="grid grid-cols-4">
        {cards.map((cardProps) => {
          return <Card {...cardProps} />;
        })}
      </main>
    </>
  );
}
