import React from 'react';
// import ProjectList from '../ProjectList';

const Projects = () => {
    return (
        <section id="work" class="work">
        <div>
            <h2 class="section-title primary-border">Projects</h2>
        </div>
        <div class="projects">
            <article class="project project-1">
                <div class="avatar">
                    <a href="https://ewalker518.github.io/run-buddy/"></a>
                </div>
            </article>
            <article class="project project-2">
                <div class="avatar">
                    <a href="https://ewalker518.github.io/game-go/"></a>
                </div>
            </article>
            <article class="project project-3">
                <div class="avatar">
                    <a href="https://dnd-character-sheet-manager.herokuapp.com/"></a>
                </div>
            </article>
            <article class="project project-4">
                <div class="avatar">
                    <a href="https://ewalker518.github.io/taskinator/"></a>
                </div>
            </article>
        </div>
    </section> 
    )
}

export default Projects