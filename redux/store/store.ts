import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "../reducers/root.reducer";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware()
    // other store enhancers if any
  )
);
export default store;
