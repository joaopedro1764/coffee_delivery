import { createContext, ReactNode, useReducer } from "react";
import { coffeeReducer } from "../reducer/reducer";
import { addNewCoffeeOrder, removeCoffee } from "../reducer/action";

export interface CoffeeProps {
  id: string;
  name: string;
  type: string[];
  legend: string;
  price: string;
}



interface CoffeContextType {
  coffeeState: CoffeeProps[];
  handleAddCoffee: (data: CoffeeProps) => void;
  handleRemoveCoffee: (coffeeRemoveId: string) => void;
}

export const CoffeeContext = createContext({} as CoffeContextType);

interface CyclesContextProvidersProps {
  children: ReactNode;
}

const initialState: CoffeeProps[] = [];

export function CoffeeContextProvider({
  children,
}: CyclesContextProvidersProps) {
  const [coffeeState, dispatch] = useReducer(coffeeReducer, initialState);

  function handleAddCoffee(newCoffeeOrder: CoffeeProps) {
    dispatch(addNewCoffeeOrder(newCoffeeOrder));
  }

  function handleRemoveCoffee(coffeeRemoveId: string) {
    dispatch(removeCoffee(coffeeRemoveId));
  }

  return (
    <CoffeeContext.Provider value={{ handleAddCoffee, handleRemoveCoffee, coffeeState }}>
      {children}
    </CoffeeContext.Provider>
  );
}
