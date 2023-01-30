import React, { useState } from 'react'
import './style.css'
const Todos = () => {
  const [inputData, setInputData] = useState('')
  const [input,setInput]=useState([])
  const addItem=()=>{
    if(!inputData){
      alert('please fill the data')
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
const  deleteAll=()=>{
      setInput([])
  }
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
        <i className="fa fa-plus add-btn" onClick={addItem}></i>
      </div>
          
      <div className='showItems' >
      {input.map((cerElem)=>{
              return( <div className='eachItem' key={cerElem.id}>
              <h3>{cerElem.name}</h3>
              <div className='todo-btn'>
                <i className="far fa-edit add-btn"></i>
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