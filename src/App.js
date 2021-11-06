import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
