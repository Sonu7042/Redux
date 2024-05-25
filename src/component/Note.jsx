import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/TodoSlice'

const Note = () => {

    const todo=useSelector(state=>state.Todos)
    const dispatch=useDispatch()



  return (
    <>
    {todo.map((item)=>{
        return <li key={item.id}>
            {item.text}
            <button onClick={()=>dispatch(removeTodo(item.id))}>Delete</button>
        </li>
    })}
    

    </>
  )
}

export default Note