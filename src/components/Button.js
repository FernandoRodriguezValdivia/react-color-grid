import React from 'react'
const Button = ({clas, onClick})=>{
    return(
        <div className={clas} onClick={onClick}> </div>
    )
}

export default Button