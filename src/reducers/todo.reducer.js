import * as actions from '../actions/types'
const defaultState={
    todos:[],
    currentShowing:[],
    filter:"All"
};

export default function(state=defaultState,action)
{
    switch(action.type)
    {
        case  actions.GET_ALL_TODOS:
        {
            return {todos:[...action.todos],currentShowing:[...action.todos],filter:"All"}
        }
        case actions.ALL_FILTER:{
            return{...state,currentShowing:[...action.todos],filter:"All"}
        }
        case actions.ACTIVE_FILTER:{
            return {...state,currentShowing:[...action.todos],filter:"Active"}
        }
        case actions.COMPLETED_FILTER :{
            return {...state,currentShowing:[...action.todos],filter:"Completed"}
        }
        default:
        return state;
    }
}