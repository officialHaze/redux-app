// this index.js file contains only a single root reducer which in turn contains all other reducers

import changeNumber from "./numberChange";
import { combineReducers } from "redux"; // this package combines all seperate reducers

const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer

