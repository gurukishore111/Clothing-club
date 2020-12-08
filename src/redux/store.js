import {createStore , applyMiddleware} from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootRedux from "./root-reducer";


const middleware = [logger];

export const store = createStore(rootRedux ,applyMiddleware(...middleware))

export const persistor = persistStore(store);

//export default {store,persistor};