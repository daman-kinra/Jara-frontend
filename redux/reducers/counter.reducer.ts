import { counterActions } from "../actions/counter.action";

const initialState = 0;

export const counterReducer = (state = initialState, actions: any) => {
  const { type } = actions;
  switch (type) {
    case counterActions.INCREMENT:
      return state + 1;
    case counterActions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
