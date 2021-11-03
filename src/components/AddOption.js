import React from "react"



// NOT stateless functional component
export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        //Esto podría devolver un error y guardarse en "error"
        //Si no devuelve nada, de lujo. Aún así nuestro interés
        //es llamar al metodo que se encuentra en el "padre" y mandarle
        //por parametro ese "option", para que se pueda manejar el array del padre.
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        //Si no hay error
        if (!error) {
            //Despejamos la caja de texto de lo que has escrito
            e.target.elements.option.value = ""
        }

    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add item</button>
                </form>
            </div>
        )
    }
}