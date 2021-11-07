import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [projects] = useState([
        {
            name: 'Run Buddy',
            description: 'Run Buddy'
        },
        {
            name: 'Game Stork',
            description: 'Game Stork'
        },
        {
            name: 'DND Manager',
            description: 'DND Manager'
        },
        {
            name: 'Taskinator',
            description: 'Taskinator'
        },
        {
            name: 'Oh Snap',
            description: 'Oh Snap'
        },
        {
            name: 'Budget Tracker',
            description: 'Budget Tracker'
        }
    ])

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };


    return (
        <section id="work" class="work">
        <div>
            <h2 class="section-title primary-border">Projects</h2>
        </div>
        <div class="projects">
            {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
            <div className="flex-row project">
                {projects.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${i}.jpg`).default}
                        alt={image.name}
                        className="avatar"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    </section> 
    )
};

export default Projects
