import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

import event4 from '../../assets/images/event4.jpg';
import event5 from '../../assets/images/event5.jpg';
import event6 from '../../assets/images/event6.jpg';
import event7 from '../../assets/images/event7.jpg';
import event8 from '../../assets/images/event8.jpg';
import event9 from '../../assets/images/event9.jpg';
import event10 from '../../assets/images/event10.jpg';

const EventDetails = () => {
  return (
    <>
      <div className="container">
        <div className="banner-end">
          <div className="row align-items-md-center">
            <div className="col-md-6 order-md-2">
              <div className="p-5 p-md-7">
                {/* Heading */}
                <div className="mb-7">
                  <span className="text-cap">Discover our Past Events</span>
                  <h3>
                    Pwani Innovation Week 2023
                  </h3>
                  <p>
                    Pwani Innovation Week 2023 is an annual event aimed at fostering innovation, entrepreneurship, and technological advancement in Kenya's coastal region.
                  </p>
                </div>
                <p>
                  Pwani innovation week Event serves as a platform to showcase the vibrant startup ecosystem, engage the community, and drive positive impact through technology and innovation.
                </p>
                <p>
                  For more information, see the{" "}
                  <a className="link" href="#">
                    Past Events
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 content-space-md-1">
              <div className="w-85 w-md-100 mx-auto me-md-auto">
                <img
                  className="img-fluid"
                  src={event4}
                  alt="Event 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-end gx-2 gx-lg-3 mb-2 mb-lg-3">
          <div
            className="col-3 d-none d-md-block"
            style={{ marginBottom: "-5rem" }}
          >
            <img
              className="img-fluid w-100"
              src={event6}
              alt="Event 6"
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              className="img-fluid w-100"
              src={event7}
              alt="Event 7"
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              className="img-fluid w-100"
              src={event8}
              alt="Event 8"
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              className="img-fluid w-100"
              src={event9}
              alt="Event 9"
            />
          </div>
        </div>
        <div className="row gx-2 gx-lg-3">
          <div className="col-6 col-md-3 offset-md-3">
            <img
              className="img-fluid w-100"
              src={event10}
              alt="Event 10"
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              className="img-fluid w-100"
              src={event5}
              alt="Event 5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
