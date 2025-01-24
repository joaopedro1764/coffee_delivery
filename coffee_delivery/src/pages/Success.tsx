import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import ilustrationImg from "../../public/images/Illustration.png";
import { useParams } from "react-router-dom";
export function Success() {
  const { orders } = useContext(CartContext);
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <div className="mt-24">
      <h1 className="text-yellow-dark font-baloo text-title-l">
        Uhu! Pedido confirmado
      </h1>
      <h5 className="text-text-l text-base-subtitle font-roboto">
        Agora é só aguardar que logo o café chegará até você
      </h5>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col justify-between p-10 w-[650px] h-[300px] border-2 border-purple rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-br-xl rounded-tl-xl">
          <div className="flex gap-x-3 items-center">
            <span className="flex  justify-center items-center p-2 rounded-full bg-purple">
              <MapPin weight="fill" className="text-white" size={20} />
            </span>
            <div className="flex flex-col">
              <span>
                Entrega em{" "}
                <strong>
                  {orderInfo.street} {""} {orderInfo.number}
                </strong>
              </span>
              <span className="">
                {orderInfo.neighborhood} {"-"} {orderInfo.city} {","}{" "}
                {orderInfo.state}
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <span className="flex  justify-center items-center p-2 rounded-full bg-yellow">
              <Timer weight="fill" className="text-white" size={20} />
            </span>
            <div className="flex flex-col">
              <span className="">Previsão na entrega</span>
              <strong>
                20 min - 30 min
              </strong>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <span className="flex  justify-center items-center p-2 rounded-full bg-yellow-dark">
              <CurrencyDollar weight="fill" className="text-white" size={20} />
            </span>
            <div className="flex flex-col">
              <span className="text-base-text text-text-m font-roboto">
                Pagamento na entrega
              </span>

              <strong>
                {paymentMethod[orderInfo.paymentMethod]}
              </strong>
            </div>
          </div>
        </div>
        <img src={ilustrationImg} />
      </div>
    </div>
  );
}
