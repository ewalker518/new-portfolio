import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    { name: 'projects', description: 'Projects completed as part of the U of U coding bootcamp' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
        <>
        <About />
        <Projects currentCategory={currentCategory} />
        </>
        ) : (
        <Contact />
        )}
      </main>
    </div>
  );
}

export default App;
