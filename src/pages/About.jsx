import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [showSponsors, setShowSponsors] = useState(false);

  return (
    <div>
      <h1>About Us</h1>
      <div>
        <button onClick={() => setShowWhoWeAre(!showWhoWeAre)}>Who We Are</button>
        {showWhoWeAre && (
          <div>
            <Link to="/about/who-we-are">Learn More</Link>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowSponsors(!showSponsors)}>Sponsors</button>
        {showSponsors && (
          <div>
            <Link to="/about/sponsors">Learn More</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
