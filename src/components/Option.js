// stateless functional component
import React from "react"


const Option = (props) => (
        //Para cada elemento tiene su boton de eliminar
        //En Options, se muestra cada Option
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
             className="button button--link"
             onClick={(e) => { props.handleDeleteOption(props.optionText); }}
             >Delete</button>
        </div>
)

export default Option