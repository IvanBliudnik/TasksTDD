import {TaskType} from "../App";
import {v1} from "uuid";

export const tasksReducer=(state:TaskType[],action:TasksReducerActionsType):TaskType[]=>{
    switch (action.type) {
        case "REMOVE-TASK":{
            return state.filter((task:TaskType) => task.id !== action.payload.taskId)
        }
        case "ADD-TASK":{
            const newTask = {
                id: v1(),
                title: action.payload.title,
                isDone: false
            }
            return [newTask, ...state] //в массив ...state добавляем newTask

        }
        default:return  state

    }
}
type TasksReducerActionsType = RemoveTaskACType | AddTaskACType
type RemoveTaskACType={
    type:'REMOVE-TASK',
    payload:{
        taskId:string
    }
}
type AddTaskACType={
    type:'ADD-TASK',
    payload:{
        title:string
    }
}

export const removeTaskAC=(taskId: string)=>{
    return{
        type:'REMOVE-TASK',
        payload:{
            taskId
        }
    } as const
}
export const addTaskAC=(title: string)=>{
    return{
        type:'ADD-TASK',
        payload:{
            title
        }
    } as const
}