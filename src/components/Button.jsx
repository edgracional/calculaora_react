import React from "react";
import './Button.css';

/* Componentes sem estados é a melhor forma de trabalhar */
export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    

    )
}
 
 
 /*   outra forma
 
 <button className={`
    
        button
        ${props.operation ? 'operation' : ''}
        ${props.operation ? 'double' : ''}
        ${props.triple ? 'double' : ''}
    `}>
    
        {props.label}
    </button>*/
