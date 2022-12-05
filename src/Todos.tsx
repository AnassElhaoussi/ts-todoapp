import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {ITodos} from './App'

interface ITodosProps {
    todos: ITodos[]
    setTodo: React.Dispatch<React.SetStateAction<string>>
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
    setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>
    setId: React.Dispatch<React.SetStateAction<number | null>>
}

const Todos: React.FC<ITodosProps> = ({
    todos,
    setTodos,
    setTodo,
    setIsUpdated, 
    setId}) => {

    function handleDelete<T>(k: T){
        const filteredTodos = todos.filter((todo, id) => {
            return id !== k
        })
        setTodos(filteredTodos)
    }

    const handleUpdate = (currentTodo: string, id: number) => {
        setTodo(currentTodo)
        setIsUpdated(true)
        setId(id)
    }
    return (
        <div className='flex flex-col gap-y-5 items-start'>
            {todos.map(({todo, completed}, id) => {
                return (
                    <div className='flex p-3 rounded-md bg-gray-200 gap-5 items-center'>
                        <span 
                        >{todo}</span>
                        <div className='space-x-3'>
                            <FontAwesomeIcon 
                            icon={faPen}
                            onClick={() => handleUpdate(todo, id)}
                             />
                            <FontAwesomeIcon 
                            icon={faTrash}
                            onClick={() => handleDelete(id)}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos