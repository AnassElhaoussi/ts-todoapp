import * as React from 'react'
import { useState, useRef } from 'react'
import './styles/index.css'
import Todos from './Todos'

export interface ITodos {
  todo: string
  completed: boolean
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [todo, setTodo] = useState<string>("")
  const [isUpdated, setIsUpdated] = useState<boolean>(false)
  const [id, setId] = useState<number | null>(null)

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(todo.trim().length > 0) setTodos((prev) => [...prev, {
      todo,
      completed: false,
    }])
    setTodo("")
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const updateTodo = () => {
    if(todo.trim().length > 0) {
      const updated = todos.map((task, k) => {
        if(id === k) return {
          ...task,
          todo: todo
        }
        else return task
      })
      setTodos(updated)
      setIsUpdated(false)
    } 
    setTodo('')
  }


  return (
    <div className='flex
     items-center justify-center bg-gray-100 min-h-screen font-body'>
      <div className='flex flex-col items-start gap-6'>
        <h1 className='text-6xl font-bold'>Hi there,</h1>
        <form className='flex flex-col items-start gap-2' action="" onSubmit={onSubmit}>
          <input 
          type="text" 
          placeholder='Add a todo'
          className='p-2 rounded-md placeholder:text-white
          bg-blue-400 outline-none text-white'
          value={todo}
          onChange={onChange}
          />
        </form>
          <button 
          style={{opacity: isUpdated ? '1' : '0.2'}}
          className='p-2 bg-yellow-400 rounded-md'
          onClick={updateTodo}
          >Update</button>
        <Todos 
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        setIsUpdated={setIsUpdated}
        setId={setId}
        />
      </div>
    </div>
  )
}

export default App
