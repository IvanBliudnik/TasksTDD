import './App.css';
import {Todolist} from "./Todolist";
import {useReducer, useState} from "react";
import {v1} from "uuid";
import {addTaskAC, removeTaskAC, tasksReducer} from "./model/tasksReducer";
import {changeFilterAC, filterReducer} from "./model/filterReducer";


export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

	const [tasks, dispatchTasks] = useReducer(tasksReducer,[
		//с кем работаю и какой state (для крупных обьектов)
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: false},
	])

	const [filter, dispatchFilter] = useReducer( filterReducer,'all')
	//useState для примитивов

	const removeTask = (taskId: string) => {
		dispatchTasks(removeTaskAC(taskId))
	}

	const addTask = (title: string)=> {
		dispatchTasks(addTaskAC(title))
	}

	const changeFilter = (filter: FilterValuesType) => {
		dispatchFilter(changeFilterAC(filter))
	}

	let tasksForTodolist = tasks
	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => !task.isDone)
	}

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone)
	}

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={tasksForTodolist}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
			/>
		</div>
	);
}

export default App;
