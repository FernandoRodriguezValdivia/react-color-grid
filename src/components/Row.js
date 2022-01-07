import React from 'react'
import Cell from "./Cell"

const Row = ({cols, selec})=>{
    return(
        <tr>
            {[...Array(cols)].map((x, i) =><Cell key={i} selec={selec}/>)}
        </tr>
    )
}

export default Row;