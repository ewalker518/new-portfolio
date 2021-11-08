import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, githubLink, deployLink, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img className="img-modal" src={require(`../../assets/images/large/${category}/${index}.jpg`).default} alt="current category" />
                <p className="modalText">{description} | <a href={githubLink}>View Repository in GitHub</a> | <a href={deployLink}>View Deployed Application</a></p>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal;