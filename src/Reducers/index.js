import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import evaluate from "./evaluate"

//defining the root Reducer
const rootReducer = combineReducers({
    answer : evaluate,
    form : formReducer
})

export default rootReducer