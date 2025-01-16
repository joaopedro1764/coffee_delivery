import { produce } from "immer";
import { ActionTypes } from "./action";

export interface CoffeeProps {
  id: string;
  name: string;
  type: string[];
  legend: string;
  price: string;
}

export function coffeeReducer(state: CoffeeProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ORDER_COFFEE: {
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    }
    case ActionTypes.REMOVE_COFFEE: {
      const indexCoffee = state.findIndex((coffee) => {
        return coffee.id === action.payload;
      });

      return produce(state, (draft) => {
        draft.splice(indexCoffee, 1);
        console.log(draft);
      });
    }
    default:
      return state;
  }
}
