import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    // 'projects' is the only category at the moment while all of my work so far is limited to classwork
    // The functionality has been put in place to add other categories as time goes on

    const [photos] = useState([
        {
            name: 'Run Buddy',
            category: 'projects',
            description: 'A website that offers fitness training services',
            githubLink: 'https://github.com/ewalker518/run-buddy',
            deployLink: 'https://ewalker518.github.io/run-buddy/'
        },
        {
            name: 'Game Stork',
            category: 'projects',
            description: 'An ongoing project that will allow users to fill out a questionnaire about their video game preferences and recommend games based on their input. Voted most stylish and attractive!',
            githubLink: 'https://github.com/ewalker518/game-stork',
            deployLink: 'https://ewalker518.github.io/game-stork/'
        },
        {
            name: 'DND Manager',
            category: 'projects',
            description: 'An ongoing project for Dungeon Masters to organize digital copies of their character sheets for all campaigns that they’re managing',
            githubLink: 'https://github.com/dylanshoemaker/dnd-manager',
            deployLink: 'https://dnd-character-sheet-manager.herokuapp.com/'
        },
        {
            name: 'Taskinator',
            category: 'projects',
            description: 'An application for managing tasks. Users can create tasks, assign categories to the tasks, keep track of the status of each task, and edit or remove tasks.',
            githubLink: 'https://github.com/ewalker518/taskinator',
            deployLink: 'https://ewalker518.github.io/taskinator/'
        },
        {
            name: 'Oh Snap',
            category: 'projects',
            description: 'A portfolio designed for a mock client to introduce React',
            githubLink: 'https://github.com/ewalker518/photo-port',
            deployLink: 'https://ewalker518.github.io/photo-port/'
        },
        {
            name: 'Budget Tracker',
            category: 'projects',
            description: 'An application for tracking income and expenditures. ***Not currently deployed, but it will be up soon!***',
            githubLink: 'https://github.com/ewalker518/budget-tracker',
            deployLink: 'https://cheese.com'
        },
        {
            name: 'Budget Tracker',
            category: 'projects',
            description: 'An ongoing project that uses JavaScript and jQuery to manage and categorize tasks',
            githubLink: 'https://github.com/ewalker518/taskmaster-pro',
            deployLink: 'https://ewalker518.github.io/taskmaster-pro/'
        },
        {
            name: 'SalonMe',
            category: 'projects',
            description: 'A React application that uses the full MERN stack and functions as a website for a fictional beauty salon',
            githubLink: 'https://github.com/dylanshoemaker/SalonMe',
            deployLink: 'https://salonme.herokuapp.com/'
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
              src={require(`../../assets/images/small/${category}/${i}.jpg`).default}
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