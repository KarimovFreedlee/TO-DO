import { IComment, ITask } from "../../components/taskScene/Task"
import { ITaskColumn } from "../../components/taskScene/Tasks"
import { getColumnsFromLocalStorage, getTasksFromLocalStorage } from "../../localStorage/LocalStorage"

export const SET_ALL_TASKS = "SET_ALL_TASKS"
export const SET_ALL_COLUMNS = "SET_ALL_COLUMNS"
export const SET_CLICK_TASK = "SET_CLICK_TASK"
export const SET_COMMENT_INDEX = "SET_COMMENT_INDEX"
export const SET_ACTIVE_COMMENT = "SET_ACTIVE_COMMENT"
export const SET_INPUT_ACTIVE = "SET_INPUT_ACTIVE"

export interface IState {
    allTasks: ITask[]
    columns: ITaskColumn[],
    clickTask: ITask,
    inputActive: boolean,
    activeComment: IComment[]
}

export const initialState: IState = {
    allTasks: getTasksFromLocalStorage(),
    columns: getColumnsFromLocalStorage(),
    clickTask: getTasksFromLocalStorage()[0],
    inputActive: false,
    activeComment: []
}

export interface IAction {
    type: string,
    payload: any
}

export const mainReducer = (state: IState = initialState, action: IAction): IState => {
    switch(action.type) {
        case SET_ALL_TASKS:
            return {...state, allTasks: action.payload }
        case SET_ALL_COLUMNS:
            return {...state, columns: action.payload }
        case SET_CLICK_TASK:
            return {...state, clickTask: action.payload }
        case SET_INPUT_ACTIVE:
            return {...state, inputActive: action.payload }
        case SET_ACTIVE_COMMENT:
            return {...state, activeComment: action.payload }
        default:
            return state
    }
}