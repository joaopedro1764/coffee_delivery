import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from "phosphor-react";
import { z } from "zod";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { ItemSelected } from "../components/ItemSelected/ItemSelected";
import { coffees } from "../data.json";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Radio } from "../components/Form/Radio";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
type FormInputs = {
  cep: string;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
  cep: z.string().min(7, "Informe o CEP"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z.string().min(1, "Informe a UF"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderInfo = z.infer<typeof newOrder>;

export function Cart() {
  const { cart, checkout } = useContext(CartContext);

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const totalPriceItemscart = totalItemsPrice + 6;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      fullAddress: "",
      neighborhood: "",
      city: "",
      state: "",
    },

  });

  const selectedPaymentMethod = watch("paymentMethod");

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    console.log(data);

    if (cart.length === 0) {
      alert("Adicione um item no carrinho");
      return;
    } else {
      checkout(data);
    }
  };

  const cep = watch("cep");

  useEffect(() => {
    if (cep?.length >= 7) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data = response.data;
          if (!data.erro) {
            setValue("street", data.logradouro || "");
            setValue("neighborhood", data.bairro || "");
            setValue("city", data.localidade || "");
            setValue("state", data.uf || "");
          } else {
            alert("CEP não encontrado.");
          }
        })
        .catch((error) => {
          console.error("Erro ao fazer a requisição:", error.message);
        });
    }
  }, [cep, setValue]);

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
          <form
            id="order"
            onSubmit={handleSubmit(handleOrderCheckout)}
            className="grid grid-rows-4 grid-cols-3 gap-4 mt-6"
          >
            <Input
              {...register("cep")}
              className="col-span-2 col-start-1 col-end-2 row-start-1"
              placeholder="CEP"
              error={errors.cep}
            />

            <Input
              {...register("street")}
              className="col-span-4 row-start-2 col-start-1 col-end-4"
              placeholder="RUA"
              disabled
              error={errors.street}
            />
            <Input
              {...register("number")}
              className="col-span-2 col-start-1 col-end-2"
              placeholder="Numero"
              type="number"
              error={errors.number}
            />
            <Input
              {...register("fullAddress")}
              className="col-span-3 col-start-2 col-end-4"
              placeholder="Complemento"
            />
            <Input
              {...register("neighborhood")}
              className="col-span-2 col-start-1 col-end-2"
              placeholder="Bairro"
              disabled
              error={errors.neighborhood}
            />
            <Input
              {...register("city")}
              className="col-span-3 col-start-2 col-end-4"
              placeholder="Cidade"
              disabled
              error={errors.city}
            />
            <Input
              {...register("state")}
              className="col-span-1 col-start-4 col-end-4 float-right max-w-[70px]"
              placeholder="UF"
              disabled
              error={errors.state}
            />
          </form>
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
            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "credit"}
              value="credit"
            >
              <CreditCard className="text-purple" size={20} />
              CARTÃO DE CRÉDITO
            </Radio>
            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "debit"}
              value="debit"
            >
              <Bank className="text-purple" size={20} />
              CARTÃO DE DÉBITO
            </Radio>
            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "cash"}
              value="cash"
              className="hidden"
            >
              <Money className="text-purple" size={20} />
              <span className="peer">DINHEIRO</span>
            </Radio>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <h1 className="text-title-xs font-baloo text-base-subtitle">
          Cafés selecionados
        </h1>
        <div className="bg-base-card max-w-full w-[450px] min-h-[500px] p-8 mt-3 rounded-tr-3xl rounded-bl-3xl rounded-br-xl rounded-tl-xl">
          <div className="max-h-[300px] overflow-auto">
            {cart.map((cartItem) => {
              return <ItemSelected key={cartItem.id} {...cartItem} />;
            })}
          </div>
          <>
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
                R$ {totalItemsPrice.toFixed(2)}
              </span>
              <span className="text-end text-text-m text-base-text font-roboto">
                R$ 6,00
              </span>
              <span className="text-end text-base-subtitle text-text-l font-bold">
                R$ {totalPriceItemscart.toFixed(2)}
              </span>
            </div>
            <button
              type="submit"
              form="order"
              className="uppercase bg-yellow text-white px-4 py-3 rounded-md w-full mt-8 font-b"
            >
              Confirmar pedido
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
