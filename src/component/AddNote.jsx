import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/TodoSlice'

const AddNote = () => {
    const [text, settext]=useState("")

    const dispatch=useDispatch()


    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(text))

    }


  return (
    <>

    <form onSubmit={handleSubmit}>
        <h2>Todo List</h2>
        <input type="text" placeholder='Enter text here' onChange={(e)=>settext(e.target.value)} />
        <button type='submit'> Submit</button>


    </form>
    </>
  )
}

export default AddNote