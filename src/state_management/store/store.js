import rootReducer from "../reducers/index";
import { legacy_createStore as createStore } from "redux"; // creates the store which contains all the state, actions and reducers defined


const store = createStore(rootReducer)

export default store