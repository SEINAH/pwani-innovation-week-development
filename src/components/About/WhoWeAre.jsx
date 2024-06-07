import React from 'react';
import event8 from '../../assets/images/event8.jpg';

const WhoWeAre = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-md-center">
          <div className="col-md-6 order-md-2 mb-5 mb-md-0">
            <div className="ps-md-5">
              <div className="mb-7">
                <span className="text-cap">About Who We Are</span>
                <h3>Our Mission</h3>
                <p>Pwani Innovation Week aims to spark innovation 
                  and entrepreneurship along Kenya's coast, 
                  empowering individuals to address local and global challenges.</p>
              </div>
              <div className="d-grid gap-3">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <span className="svg-icon svg-icon-sm text-primary"></span>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h5 className="text-primary">
                      <a href="#">Drive </a>
                    </h5>
                    <p>
                    The event is fueled by a passion for innovation, excellence, 
                    and collaboration, striving to create a culture where ideas 
                    thrive and solutions are born.
                    </p>
                  </div>
                </div>
               
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <span className="svg-icon svg-icon-sm text-primary"></span>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h5 className="text-primary">
                      <a href="#">Impact</a>
                    </h5>
                    <p>
                    Pwani Innovation Week has significantly impacted the 
                    coastal region by empowering entrepreneurs, fostering innovation, 
                    and contributing to community growth.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <span className="svg-icon svg-icon-sm text-primary"></span>
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h5 className="text-primary">
                      <a href="#">Why Choose Us</a>
                    </h5>
                    <p> Attendees join a dynamic movement, gaining access to diverse programs, 
                      workshops, and networking opportunities to turn ideas 
                      into reality and create positive change.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={event8}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
