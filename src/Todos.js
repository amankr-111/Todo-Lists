import { findAllByAltText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import './style.css'
const Todos = () => {
  const getLocalData=()=>{
      const lists = localStorage.getItem('myTodoLists') 
      if(lists)
      return JSON.parse(lists)
      else
      return [];
  }
  const [inputData, setInputData] = useState('')
  const [input,setInput]=useState(getLocalData())
  const [isEditItem, setIsEditItem]=useState("")
  const [toggleButton,setToggleButton]=useState(false)
  const addItem=()=>{
    if(!inputData){
      alert('please fill the data')
    }
    else if(inputData && toggleButton){
      setInput(input.map((cerElem)=>{
          if (cerElem.id === isEditItem)
          return {...cerElem, name:inputData}
          return cerElem;
      }))
      setInputData("")
      setIsEditItem("")
      setToggleButton(false)

    }
    else{
      const myNewInputData={
        id:new Date().getTime().toString(),
        name:inputData,
      }
    setInput([...input,myNewInputData ])
    setInputData('')
  }
  }
  const deleteItem=(index)=>{
    const updatedItems=input.filter((cerElem)=>{
      return cerElem.id !== index;
    })
    setInput(updatedItems)
  }

  const editItem=(index)=>{
      const item_todo_edited= input.find((cerElem)=>{
        return cerElem.id===index
      })
      setInputData(item_todo_edited.name)
      setIsEditItem(index)
      setToggleButton(true)
  }
const  deleteAll=()=>{
      setInput([])
  }

  useEffect(()=>{
    localStorage.setItem('myTodoLists',JSON.stringify(input))
  },[input])
  return (
    <div className='main-div'>
      <div className='child-div'>

        <figure>
          <img src="./image./img.png"></img>
          <figcaption>Add Your todos List</figcaption>
        </figure>
        <div className='addItems'>
          <input
           type='text'
           placeholder='✍️write your Items'
           className='form-control' 
           value={inputData} 
           onChange={(event) =>setInputData(event.target.value)}>

           </input>
           {toggleButton ? (<i className="fa fa-edit add-btn" onClick={addItem}></i>):
           (<i className="fa fa-plus add-btn" onClick={addItem}></i>)}

        
      </div>
          
      <div className='showItems' >
      {input.map((cerElem)=>{
              return( <div className='eachItem' key={cerElem.id}>
              <h3>{cerElem.name}</h3>
              <div className='todo-btn'>
                <i className="far fa-edit add-btn" onClick={()=>editItem(cerElem.id)}></i>
                <i className="far fa-trash-alt add-btn" onClick={()=>{deleteItem(cerElem.id)}}></i>
              </div>
            </div>)
          })}
        <button className='btn effect04' data-sm-link-text='Remove All' onClick={deleteAll}>
          <span>check List</span>
        </button>
      </div>
    </div>
    </div >
  )
}

export default Todos