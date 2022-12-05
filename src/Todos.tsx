import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import {ITodos} from './App'

interface ITodosProps {
    todos: ITodos[],
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
}

const Todos: React.FC<ITodosProps> = ({todos, setTodos}) => {
    function handleDelete<T>(k: T){
        const filteredTodos = todos.filter((todo) => {
            return todo.id !== k
        })

        setTodos(filteredTodos)
    }
    return (
        <div className='flex flex-col gap-y-5 items-start'>
            {todos.map(({todo, completed, id}) => {
                return (
                    <div className='flex p-3 rounded-md bg-gray-200 gap-5 items-center'>
                        <span 
                        >{todo}</span>
                        <div className='space-x-3'>
                            <FontAwesomeIcon icon={faCheck} />
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