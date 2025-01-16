import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from "phosphor-react";
import { FormCheckout } from "../components/Form/FormCheckout";
import { ItemSelected } from "../components/ItemSelected/ItemSelected";
import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
export function Checkout() {
  const { coffeeState } = useContext(CoffeeContext);
  return (
    <div className="w-screen h-screen mt-16 flex">
      <div className="flex flex-col w-1/2 ">
        <h1 className="text-title-xs text-base-subtitle font-baloo">
          Complete o seu pedido
        </h1>
        <div className="flex flex-col bg-base-card p-8 mt-3 rounded-md">
          <div className="flex items-start gap-x-2">
            <MapPinLine className="text-yellow-dark" size={24} weight="light" />
            <div>
              <h3 className="text-text-m text-base-subtitle font-roboto">
                Endereço de Entrega
              </h3>
              <p className="text-base-text text-text-s font-roboto mt-2">
                Informe o endereço aonde deseja receber o seu pedido
              </p>
            </div>
          </div>
          <FormCheckout />
        </div>
        <div className="mt-12 p-8 bg-base-card rounded-md">
          <div className="flex gap-x-2">
            <CurrencyDollar className="text-purple" size={24} />
            <div className="flex flex-col gap-y-1.5">
              <span className="text-text-m font-roboto text-base-subtitle">
                Pagamento
              </span>
              <p className="text-text-s font-roboto text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-6">
            <button className="min-w-52 flex gap-x-2 items-center text-base-text text-text-s font-roboto rounded-md bg-base-button border-2 p-3 focus:border-purple focus:bg-purple-light">
              <CreditCard className="text-purple" size={20} />
              CARTÃO DE CRÉDITO
            </button>
            <button className="min-w-52 flex gap-x-2 items-center text-base-text text-text-s font-roboto rounded-md bg-base-button border-2 p-3 focus:border-purple focus:bg-purple-light">
              <Bank className="text-purple" size={20} />
              CARTÃO DE DÉBITO
            </button>
            <button className="min-w-52 flex gap-x-2 items-center text-base-text text-text-s font-roboto rounded-md bg-base-button border-2 p-3 focus:border-purple focus:bg-purple-light">
              <Money className="text-purple" size={20} />
              DINHEIRO
            </button>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <h1 className="text-title-xs font-baloo text-base-subtitle">
          Cafés selecionados
        </h1>
        <div className="bg-base-card max-w-full w-[450px] h-[500px] p-8 mt-3 rounded-tr-3xl rounded-bl-3xl rounded-br-xl rounded-tl-xl">
          <div className="max-h-[300px] overflow-auto">
            {coffeeState.map((coffee) => {
              return <ItemSelected {...coffee} />;
            })}
          </div>

          {coffeeState.length > 0 ? (
            <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-7 justify-end">
              <h3 className="col-span-1 col-start-1 col-end-2 text-base-text text-text-s font-roboto">
                Total de itens
              </h3>
              <h3 className="col-span-1 row-start-2 col-start-1 col-end-2 text-base-text text-text-s font-roboto">
                Entrega
              </h3>
              <h3 className="col-span-1 row-start-3  col-start-1 col-end-2 text-text-l text-base-subtitle font-bold">
                Total
              </h3>
              <span className="col-span-1 col-start-2 col-end-2 text-end text-text-m text-base-text font-roboto">
                R$ 29.70
              </span>
              <span className="text-end text-text-m text-base-text font-roboto">
                R$ 6,00
              </span>
              <span className="text-end text-base-subtitle text-text-l font-bold">
                R$ 35,00
              </span>
            </div>
          ) : (
            <div>Não há café selecionado</div>
          )}
        </div>
      </div>
    </div>
  );
}
