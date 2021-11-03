import React from "react"
import Option from "./Option.js"

// stateless functional component
//Implicit return, no need for curly-braces: New syntax of ES6 Javascript
const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your items</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>
                    Delete all</button>
            </div>
        {props.options.length === 0 && <p className="widget__message">Write up some ideas/tasks and we'll help you decide</p>}
            
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                        count={index+1} 
                    />
                ))
            }

        </div>
)

export default Options