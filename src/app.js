import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp.js"
import "./styles/styles.scss"    //This works because we teached webpack to read .css files (see webpack.config.js)
import "normalize.css/normalize.css"    //This too


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))