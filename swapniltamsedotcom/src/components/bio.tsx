import React from 'react';
// import profileImage from '../assets/swapnil-tamse-profile.jpg';

const Bio: React.FC = () => {
  return (
    <section id="bio">
      <h2>About Me</h2>
      <p>
      I'm a software engineer with 13 years of experience in Java, C#, AWS, and SQL. 
      Currently, I am an Engineering Manager at Prudential Financial.  </p>
      {/* <img src={profileImage} alt="Profile2" /> */}
      {/* <img src={require('../assets/swapnil-tamse-profile.jpg')} alt="Profile2" /> */}
    </section>
  );
};

export default Bio;
