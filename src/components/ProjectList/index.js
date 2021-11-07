import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Run Buddy',
            category: 'projects',
            description: 'Run Buddy'
        },
        {
            name: 'Game Stork',
            category: 'projects',
            description: 'Game Stork'
        },
        {
            name: 'DND Manager',
            category: 'projects',
            description: 'DND Manager'
        },
        {
            name: 'Taskinator',
            category: 'projects',
            description: 'Taskinator'
        },
        {
            name: 'Oh Snap',
            category: 'projects',
            description: 'Oh Snap'
        },
        {
            name: 'Budget Tracker',
            category: 'projects',
            description: 'Budget Tracker'
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    const toggleModal = (image, i) => {
      setCurrentPhoto({ ...image, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div>
        {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/${category}/${i}.jpg`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
};

export default ProjectList;