import React from "react";
// import { useState } from "react";
import "../css/style.css";

// import useLogin from "../hooks/useLogin";
import DarkModeToggle from "../components/DarkModeToggle";
const HomePage = () => {
  // // use States for sign up
  // const [signUpEmail, setSignUpEmail] = useState("");
  // const [signUpPassword, setSignUpPassword] = useState("");
  // const [username, setUsername] = useState("");

  // const handleSignUpForm = (e) => {
  //   alert("Sign Up Successful!");
  //   e.preventDefault();
  // };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="en-text">Events App</span>
          </div>
          <div className="nav-links">
            <a href="sign-up.html" className="btn btn-primary btn-sm en-text">
              sign-up
            </a>
            <a href="login.html" className="btn btn-primary btn-sm en-text">
              login
            </a>
          </div>
          <div className="nav-controls">
            <div className="toggle-container">
              <DarkModeToggle />
              <span className="en-text">Dark Mode</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="events-section">
        <div className="section-header">
          <h2 className="en-text">Upcoming Events</h2>
          <p className="section-subtitle en-text">
            Discover the best events in your city
          </p>
        </div>
        <div className="events-container">
          {/* Event 1 */}
          <div className="event-card">
            <div className="event-badge en-text">New</div>
            <div className="event-image">
              <img src="img/logo.jpeg" alt="Music Event" />
            </div>
            <div className="event-details">
              <h3 className="event-title en-text">Music Event</h3>
              <div className="event-meta">
                <span className="event-date en-text">
                  <i className="fas fa-calendar-alt"></i> June 15, 2025
                </span>
                <span className="event-venue en-text">
                  <i className="fas fa-map-marker-alt"></i> National Theater
                </span>
              </div>
              <p className="event-description en-text">
                Live music concert with top local artists. An unforgettable
                night of music and entertainment.
              </p>
              <div className="event-footer">
                <span className="event-price en-text">Price: 150 EGP</span>
                <button className="book-btn en-text">Book Now</button>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="event-card">
            <div className="event-badge en-text">New</div>
            <div className="event-image">
              <img src="img/1.jpeg" alt="Music Event" />
            </div>
            <div className="event-details">
              <h3 className="event-title en-text">Music Event</h3>
              <div className="event-meta">
                <span className="event-date en-text">
                  <i className="fas fa-calendar-alt"></i> June 15, 2025
                </span>
                <span className="event-venue en-text">
                  <i className="fas fa-map-marker-alt"></i> National Theater
                </span>
              </div>
              <p className="event-description en-text">
                Live music concert with top local artists. An unforgettable
                night of music and entertainment.
              </p>
              <div className="event-footer">
                <span className="event-price en-text">Price: 150 EGP</span>
                <button className="book-btn en-text">Book Now</button>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="event-card">
            <div className="event-image">
              <img src="img/cnn.png" alt="Tech Conference" />
            </div>
            <div className="event-details">
              <h3 className="event-title en-text">Tech Conference</h3>
              <div className="event-meta">
                <span className="event-date en-text">
                  <i className="fas fa-calendar-alt"></i> June 20, 2025
                </span>
                <span className="event-venue en-text">
                  <i className="fas fa-map-marker-alt"></i> Convention Center
                </span>
              </div>
              <p className="event-description en-text">
                Latest developments in technology with industry experts.
                Opportunity to learn and network.
              </p>
              <div className="event-footer">
                <span className="event-price en-text">Price: 200 EGP</span>
                <button className="book-btn en-text">Book Now</button>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="event-card">
            <div className="event-badge en-text">Popular</div>
            <div className="event-image">
              <img src="img/awrds.png" alt="Art Exhibition" />
            </div>
            <div className="event-details">
              <h3 className="event-title en-text">Art Exhibition</h3>
              <div className="event-meta">
                <span className="event-date en-text">
                  <i className="fas fa-calendar-alt"></i> June 25, 2025
                </span>
                <span className="event-venue en-text">
                  <i className="fas fa-map-marker-alt"></i> National Museum
                </span>
              </div>
              <p className="event-description en-text">
                Showcase of works by local and international artists. A rich and
                diverse artistic experience.
              </p>
              <div className="event-footer">
                <span className="event-price en-text">Price: 100 EGP</span>
                <button className="book-btn booked en-text">Booked</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="en-text">Subscribe to our Newsletter</h2>
          <p className="newsletter-description en-text">
            Get the latest updates and special offers on events directly to your
            email
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your Email"
              className="en-text"
              required
            />
            <button type="submit" className="btn btn-primary en-text">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
