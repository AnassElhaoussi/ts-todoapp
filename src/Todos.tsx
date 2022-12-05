import * as React from 'react'
import {ITodos} from './App'

interface ITodosProps {
    todos: ITodos[]
}

const Todos: React.FC<ITodosProps> = ({todos}) => {
   
    const colors = ['blue', 'yellow', 'pink']
    return (
        <div className='flex flex-col gap-y-5 items-start'>
            {todos.map(({todo, completed}) => {
                return (
                    <span className='bg-yellow-100' style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)]}}>{todo}</span>
                )
            })}
        </div>
    )
}

export default Todos