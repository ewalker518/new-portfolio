import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img src={require(`../../assets/images/${index}.jpg`).default} />
                <p>{description}</p>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal;