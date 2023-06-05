import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// const store = createStore(cakeReducer);
// const store = createStore(iceCreamReducer);
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// const store = createStore(rootReducer);

export default store;
