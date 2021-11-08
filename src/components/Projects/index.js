import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Projects(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1 className="section-title">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p className="projects">{currentCategory.description}</p>
            <ProjectList category={currentCategory.name} />
        </section>
    )
}

export default Projects;

