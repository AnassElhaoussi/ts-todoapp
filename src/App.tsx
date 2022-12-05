import * as React from 'react'
import { useState, useRef } from 'react'
import './styles/index.css'
import Todos from './Todos'

export interface ITodos {
  todo: string,
  completed: boolean,
  id: number
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [todo, setTodo] = useState<string>("")
  const id = useRef<number>(0)

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    id.current++
    setTodos((prev) => [...prev, {
      todo,
      completed: false,
      id: id.current
    }])
    setTodo("")
    console.log(todos)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <div className='flex
     items-center justify-center bg-gray-100 min-h-screen font-body'>
      <div className='flex flex-col items-start gap-6'>
        <h1 className='text-6xl font-bold'>Hi there,</h1>
        <form action="" onSubmit={onSubmit}>
          <input 
          type="text" 
          placeholder='Add a todo'
          className='p-2 rounded-md placeholder:text-white
          bg-blue-400 outline-none text-white'
          value={todo}
          onChange={onChange}
          />
        </form>
        <Todos 
        todos={todos}
        setTodos={setTodos}
        />
      </div>
    </div>
  )
}

export default App
