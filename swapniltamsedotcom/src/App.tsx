import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Bio from './components/bio';
import Projects from './components/projects';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
