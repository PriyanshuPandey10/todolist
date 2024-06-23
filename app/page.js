'use client'
import React, {useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copytask =  [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  } 

  const completeHandler = (i) => {
    let copytask =  [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  } 


  let renderTask = <h2>No Task Available</h2>
  
    if(mainTask.length > 0){
      renderTask = mainTask.map((task, i) => {
      return(
        <li key={i}  className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between  w-2/3'>
          <h5 className='text-xxl font-semibold '>{task.title}</h5>
          <h5 className='text-lg font-medium'>{task.desc}</h5>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className='text-white bg-red-700 hover:bg-red-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
          <button onClick={()=>{
            completeHandler(i)
          }} className='text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900'>Completed</button>
        </li>
      );
    });
    
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Priyanshu's Todo List</h1>
    <form onSubmit={submitHandler} >
    <input type="text" className=' text-2xl border-zinc-800 border-2 m-8 p-4' placeholder='Enter Task Here' value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
    <input type="text" className=' text-2xl border-zinc-800 border-2 m-8 p-4' placeholder='Enter The Description' value={desc} onChange={(e)=>{setdesc(e.target.value)}}></input>
    <button className='bg-black  text-white px-4 py-2 text-xxl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200 '>
      <ul>
        {renderTask}
      </ul>

    </div>
    </>
  )
}

export default page