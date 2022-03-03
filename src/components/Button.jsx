import React from "react";
import './Button.css';

/* Componentes sem estados é a melhor forma de trabalhar */
export default props => 
    <button className="button">{props.label}</button>
