import { useEffect, useState } from 'react'
import './App.css'
import { MdDeleteSweep } from "react-icons/md";
import {BsCheckLg} from 'react-icons/bs';

  function App() {
  
    
  const [isCompleteScreen, setIsCompleteScreen]= useState(false);
  const [allTodos, setTodos]= useState([]);
  const [newTitle, setnewTitle]= useState("");
  const [newDescription, setnewDescription]= useState("");
  const [completedtodos, setCompletedTodos]= useState([]);

  const handleAddTodo = ()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    };

    let updatedTodoArr= [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
  };

  let handleDeleteTodo= (index)=> {
    let reducedTodo= [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  };

  let handleComplete= (index)=> {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    
    let completedOn = dd + '-'+ mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
    
    let filteredItem= {
      ...allTodos[index],
      completedOn:completedOn
    }

    let updatedCompletedArr= [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);

  }

  useEffect( ()=> {
   let savedTodo= JSON.parse(localStorage.getItem('todolist'));
  if(savedTodo){
    setTodos(savedTodo);
  }
  },[]
)
  return (
   <>
<div className='App'>
        <h1>Todo-list</h1>

        <div className='todo-wrapper'>
      <div className='todo-input'>
        <div className='todo-input-item'>
          <label> Title</label>
          <input type="text" value={newTitle} onChange={(e)=>setnewTitle(e.target.value)} placeholder='Enter the task!' />
        </div>

        <div className='todo-input-item'>
          <label> Description</label>
          <input type="text" value={newDescription} onChange={(e)=>setnewDescription(e.target.value)} placeholder='Enter the description for the task' />
        </div>

        <div className='todo-input-item'>
         <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
        </div>
      </div>

      <div className='btn-area'>
  <button
    className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
    onClick={() => setIsCompleteScreen(false)}
  >
    Todo
  </button>

  <button
    className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
    onClick={() => setIsCompleteScreen(true)}
  >
    Completed
  </button>
</div>


      <div className='todo-list'> 
      {isCompleteScreen===false && allTodos.map((item,index)=>{
        return(
          <div className='todo-list-item' key={index}>
          <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          </div>
           <div>
           <MdDeleteSweep className='icon' onClick={()=> handleDeleteTodo(index)} title='delete?'/>
           <BsCheckLg className= 'check-icons' onClick={()=> handleComplete(index)} title='completed?'/>
            </div>
        </div>
        )
      }) }

{isCompleteScreen===true && completedtodos.map((item,index)=>{
        return(
          <div className='todo-list-item' key={index}>
          <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><small>completed on: {item.completedOn}</small></p>
          </div>
           <div>
           <MdDeleteSweep className='icon' onClick={()=> handleDeleteTodo(index)} title='delete?'/>
          
            </div>
        </div>
        )
      }) }
      
   
        </div>
        </div>
     </div>
   </>
      
      
  
  
  );
 
  }
  export default App