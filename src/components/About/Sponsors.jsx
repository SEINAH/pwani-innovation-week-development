// Sponsors.jsx

import event9 from '../../assets/images/event9.jpg';
import React from 'react';

const Sponsors = () => {
  return (
    <div className="container content-space-1">
      <div className="row align-items-md-center">
        <div className="col-md-6 mb-5 mb-md-0">
          <div className="pe-md-5">
            <div className="mb-7">
              <span className="text-cap">Sponsors</span>
            </div>
            <div className="d-grid gap-3">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className="svg-icon svg-icon-sm text-primary"></span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-primary">
                    <a href="#"> Corporate Partnerships</a>
                  </h5>
                  <p>
                  Pwani Innovation Week is proud to partner with leading corporations committed 
                  to fostering innovation and entrepreneurship. These partnerships provide 
                  financial support, expertise, and resources to help bring our initiatives to life.
                  </p>
                </div>
              </div>
            
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className="svg-icon svg-icon-sm text-primary"></span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-primary">
                    <a href="#">Innovation Enablers</a>
                  </h5>
                  <p>
                   Our sponsors play a crucial role in enabling innovation 
                   by providing access to technology, mentorship, and 
                   networking opportunities. Through their support, 
                   they empower entrepreneurs and startups to scale their ideas and solutions.
                  </p>
                </div>
              </div>
             
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className="svg-icon svg-icon-sm text-primary"></span>
                </div>
                <div className="flex-grow-1 ms-4">
                  <h5 className="text-primary">
                    <a href="#">
                    Community Engagement
                    </a>
                  </h5>
                  <p>
                  Sponsors actively engage with the PIW community through workshops, 
                  panel discussions, and networking events. 
                  They share insights, best practices, and opportunities 
                  to collaborate, enriching the overall experience for participants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <img
              className="img-fluid"
              src={event9}
              alt="Image Description"
            />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
