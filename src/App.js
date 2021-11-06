import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
        <>
        <About />
        <Projects />
        </>
        ) : (
        <Contact />
        )}
      </main>
    </div>
  );
}

export default App;
