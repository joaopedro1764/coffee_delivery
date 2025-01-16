import { Input } from "./Input";

export function FormCheckout() {
  return (
    <div className="grid grid-rows-4 grid-cols-3 gap-4 mt-6">
      <Input
        className="col-span-2 col-start-1 col-end-2 row-start-1"
        placeholder="CEP"
      />

      <Input
        className="col-span-4 row-start-2 col-start-1 col-end-4"
        placeholder="RUA"
      />
      <Input
        className="col-span-2 col-start-1 col-end-2"
        placeholder="Numero"
        type="number"
      />
      <Input
        className="col-span-3 col-start-2 col-end-4"
        placeholder="Complemento"
      />
      <Input
        className="col-span-2 col-start-1 col-end-2"
        placeholder="Bairro"
      />
      <Input
        className="col-span-3 col-start-2 col-end-4"
        placeholder="Cidade"
      />
      <Input
        className="col-span-1 col-start-4 col-end-4 float-right max-w-[70px]"
        placeholder="UF"
      />
    </div>
  );
}
