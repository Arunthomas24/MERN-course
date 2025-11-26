import React, { useState } from 'react'
import'../App.css'

const Todo = () => {
    const [list, setList] = useState([]);
 const [task,setTask]=useState('')
 const [Status,setStatus]=useState('')
 const [edit,setEdit]=useState(false)
 const [editId,setEditId]=useState()
 const handleAdd = () => {
    if (edit) {
       const updateArray = [...list];

       updateArray[editId].task = task;
       updateArray[editId].Status = Status;
       setList(updateArray);
       setEdit(false);
       
    }
    else {
      const todo = {task, Status};
   
    console.log(todo);
    const newArray = [...list, todo]
    
    setList(newArray);

    console.log(list);
    
    console.log(task);
    console.log(Status);
    
     
    }
    
    setTask('');
   
    setStatus('');
    
    
 }

 const handleDelete = (id) => {
    const newArray = list.filter((val,i)=> id !== i);
    setList(newArray);

 }

 const handleEdit = (id) => {
    setTask(list[id].task);
    setStatus(list[id].Status);
    setEdit(true);
    setEditId(id);
 }
  return (
    <div className='Dsign'>
    <div> 
        <input placeholder='title' value={task} type='text'  onChange={(e)=>setTask(e.target.value)}/>
         <select value={Status} onChange={(e) => setStatus(e.target.value)}>
        <option value=''>Select Status</option>
        <option value='Pending'>Pending</option>
        <option value='In Progress'>In Progress</option>
        <option value='Completed'>Completed</option>
      </select>

        
        {task}{Status}
        <button onClick={handleAdd}>{edit ? "update": "add"}</button>
        

        <div >
        <ol>
                {list.map((data,index)=>(
                    <li key={index}>{data.task} - {data.Status} <button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>delete</button> </li>

                ))}
            </ol>
        </div>
    </div>
    </div>
  )
}

export default Todo;