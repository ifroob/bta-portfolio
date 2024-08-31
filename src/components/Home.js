// src/components/Home.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Terminal from './Terminal';
import './Home.css';

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={fadeIn} className="home">
      <h1 className="title">Welcome to Brian Ta's Portfolio</h1>
      <p className="intro">Hi, I'm Brian Ta, a <span className="highlight">DevOps Engineer</span> with a passion for <span className="highlight">cloud infrastructure</span> and <span className="highlight">automation</span>.</p>
      <p className="call-to-action">Explore my work and <a href="/resume" className="resume-link">view and download my resume</a>.</p>

      <Terminal />

      <section className="image-gallery">
        <img src="https://images.pexels.com/photos/1051070/pexels-photo-1051070.jpeg?auto=compress&cs=tinysrgb&h=750&w=8000" alt="Image 1" />
        <img src="https://images.pexels.com/photos/1051070/pexels-photo-1051070.jpeg?auto=compress&cs=tinysrgb&h=750&w=800" alt="Image 2" />
        <img src="https://images.pexels.com/photos/1051070/pexels-photo-1051070.jpeg?auto=compress&cs=tinysrgb&h=750&w=800" alt="Image 3" />
      </section>
    </animated.div>
  );
};

export default Home;
