import React, { useState } from 'react'
import './style.css'
const Todos = () => {
  const [inputData, setInputData] = useState('')
  comst[input,setInput]=useState([])
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
        <i className="fa fa-plus add-btn" onClick={setState}'></i>
      </div>

      <div className='showItems' >
        <div className='eachItem'>
          <h3>Apple</h3>
          <div className='todo-btn'>
            <i className="far fa-edit add-btn"></i>
            <i className="far fa-trash-alt add-btn"></i>
          </div>
        </div>

        <button className='btn effect04' data-sm-link-text='Remove All'>
          <span>check List</span>
        </button>
      </div>
    </div>
    </div >
  )
}

export default Todos