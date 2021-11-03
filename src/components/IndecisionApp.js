import React from "react"
import AddOption from "./AddOption.js"
import Header from "./Header.js"
import Action from "./Action.js"
import Options from "./Options"
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        //For the modal, it will show the selected option
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        //De la coleccion, filtrará todo lo que hay en la condición de que la "option" actual (bucle interno) no sea "optionToRemove"
        //Al final se quedara toda la coleccion menos "optionToRemove"
        //Como en handleAddOption, no borramos el previousState, creamos un nuevo array sin ese optionToRemoves
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState (() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter a valid item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'You already added this item';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleClearSelectedOption = () => {

        this.setState(() => ({ selectedOption: undefined }))
    }

    //A React method, life-cycle. If an update has been done, do something
    componentDidUpdate(prevProps, prevState) {

        //localStorage.getItem("options") in Google Chrome console
        //We are saving the options array in the localStorage as a JSON
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }

    }

    //A React method, life-cycle. If this (IndecisionApp class) has been correctly mounted, do something
    componentDidMount() {

        //If bad data has been introduced, we hande it with a try-catch clause
        try {

            //Retrieving the data from the localStorage
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)

            if (options) {
                //"This" is Indecision app. So this method of setState, will access the state (options) and put this there 
                this.setState(() => ({ options }))
            }

        } catch (e) {
            //do nothing
        }
    }

    
    render() {

        const subtitle = "You don't know what to do first? Let a webpage decide for you."

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        )
    }
}


IndecisionApp.defaultProps = {
    options: []
}