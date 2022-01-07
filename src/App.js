import React, { useState } from 'react'
import './App.css';
import Table from './components/table.js'
import Button from './components/Button.js'

function App() {
  const [selec,setSelec]=useState("celda");
  const [rows,setRows]=useState(10);
  const [cols,setCols]=useState(10);
  

  const onChangeRows = (e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      if(e.target.value === ''){
        setRows(1)
      }
      else{
        setRows(e.target.value)
      }
    }
  }

  const onChangeCols = (e)=>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      if(e.target.value === ''){
        setCols(1)
      }
      else{
        setCols(e.target.value)
      }
    }
  }



  return (
    <div className="App">
      <label>Rows: <input value={rows.value} onChange={onChangeRows}/></label><br/>
      <label>Columns: <input value={cols.value} onChange={onChangeCols}/></label><br/>
      <Table selec = {selec} rows={parseInt(rows)} cols={parseInt(cols)}/>
      <h2>Select a color and click on any cell of de grid:</h2>
      <div className='selector'>
      <Button clas={'selecblack'} onClick={()=>setSelec('black')} />
      <Button clas={'selecblue'} onClick={()=>setSelec('blue')} />
      <Button clas={'selecgreen'} onClick={()=>setSelec('green')} />
      </div>
    </div>
  );
}

export default App;