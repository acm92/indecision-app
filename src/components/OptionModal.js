import React from "react"
import Modal from "react-modal"

//A generic modal
const OptionModal = (props) => (
    //Double exclamation mark to convert to an authentic boolean (selectedOption can be undefined, string...)
    //onRequestClose: ESC key or clicking outside the modal, closes the modal
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected Option" 
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Do this first:</h3>
        {   //The modal will appear if there exists a value in selectedOption
            props.selectedOption && <p className="modal__body">{props.selectedOption}</p>
        }
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal

