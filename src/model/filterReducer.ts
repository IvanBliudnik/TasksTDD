import {FilterValuesType, TaskType} from "../App";


export const filterReducer=(state:FilterValuesType,action:any):FilterValuesType=>{
    switch (action.type) {
        case "xxx":{
            return action.payload.filter
        //потому что примитив
        }
        default:return  state
    }
}
type changeFilterACType = {
    type: 'CHANGE-FILTER',
    payload: {
        filter: FilterValuesType
    }
}

export const changeFilterAC = (filter: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            filter
        }
    } as const
}