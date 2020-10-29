import serverRequest from "../api/RegularExpressionEvaluationRequest"

//just in case to avoid typos!
export const EVALUATE_EXPRESSION = "evaluate_expression"
export const SET_VARRIABLES = "set_varraibles"


//Fetching the expression evaluation result
//In order to be able to use asynchronous operations in the actions, Redux-Thunk has been used as a middleware.
export const evaluate_expression = (expression) => {
    return async function(dispatch, getState){
    
        const res = await serverRequest.post({
            expression : expression
        })

        //dispatching the evaluation action
        dispatch({
            type : EVALUATE_EXPRESSION,
            payload : res
        })
    }  
}