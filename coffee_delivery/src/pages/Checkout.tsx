import { MapPinLine } from "phosphor-react";
import { FormCheckout } from "../components/Form/FormCheckout";
export function Checkout() {
  return (
    <>
      <h1 className="mt-16 text-title-xs text-base-subtitle font-baloo">
        Complete o seu pedido
      </h1>
      <div className="bg-base-card p-8 max-w-[60%] mt-3">
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
    </>
  );
}
