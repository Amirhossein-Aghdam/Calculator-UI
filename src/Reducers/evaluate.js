import {EVALUATE_EXPRESSION} from "../Actions/index"

//The Reducer of the evaluation action
export default function(state = null , action){
    switch(action.type){
        case EVALUATE_EXPRESSION:
            return action.payload 
        default: 
            return state
    }
}