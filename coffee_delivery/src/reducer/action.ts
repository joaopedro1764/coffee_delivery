import { CoffeeProps } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ORDER_COFFEE = "ADD_NEW_ORDER_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  DECREASE_QUANTITY_COFFEE = "DECREASE_QUANTITY_COFFEE",
}

export function addNewCoffeeOrder(newCoffe: CoffeeProps) {
  return {
    type: ActionTypes.ADD_NEW_ORDER_COFFEE,
    payload: newCoffe,
  };
}

export function removeCoffee(coffeeRemoveId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: coffeeRemoveId,
  };
}
