import React from 'react'
import Row from "./Row"

const Table = ({rows,cols,selec})=>{
    return(
        <table className='grid'>
            {[...Array(rows)].map((x, i) =><Row cols={cols} selec={selec} key={i} />)}
        </table>
    )
}

export default Table;