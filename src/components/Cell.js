import React, { useState } from 'react'

const Cell = ({selec})=>{
    const [color,setColor] = useState("black")
    return(
        <td className = {color} onClick={()=> setColor(selec)}></td>
    )
}

export default Cell;