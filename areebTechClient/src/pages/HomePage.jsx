import React from "react";

// components
import NavBarHP from "../components/NavBarHP";

const HomePage = () => {
  const imageForEvent =
    "https://media.istockphoto.com/id/1482843873/photo/close-up-on-hands-of-a-crowd-of-people-clapping-in-dark-conference-hall-during-a-motivational.jpg?s=612x612&w=0&k=20&c=l82b7EN4ml1NOIHsTMrQtEO6FpJbOE5ZbimEG1aeGM0=";
  return (
    <>
      <NavBarHP></NavBarHP>
      <section className="events-section">
        <div className="section-header">
          <h2 className="en-text">Upcoming Events</h2>
          <p className="section-subtitle en-text">
            Discover the best events in your city
          </p>
        </div>
        <div className="events-container">
          <div className="event-card">
            <div className="event-image">
              <img src={imageForEvent} alt="Tech Conference" />
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
          {/* Event 3 */}
          <div className="event-card">
            <div className="event-image">
              <img src={imageForEvent} alt="Tech Conference" />
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
              <img src={imageForEvent} alt="Art Exhibition" />
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

          {/* Event 5 */}

          <div className="event-card">
            <div className="event-badge en-text">Popular</div>
            <div className="event-image">
              <img src={imageForEvent} alt="Art Exhibition" />
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
          {/* Event 6 */}
          <div className="event-card">
            <div className="event-badge en-text">Popular</div>
            <div className="event-image">
              <img src={imageForEvent} alt="Art Exhibition" />
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

// {/* Event 1 */}
// <Event
// event={{
//   name: "Musician Event",
//   image: imageForEvent,
//   category: "Music",
//   date: "June 15, 2025",
//   venue: "National Theater",
//   description:
//     "Live music concert with top local artists. An unforgettable night of music and entertainment",
//   price: 100,
//   status: "available",
//   _id: "1",
// }}
// />
// {/* Event 2 */}
// <Event
// event={{
//   name: "Musician Event",
//   image: imageForEvent,
//   category: "Music",
//   date: "June 15, 2025",
//   venue: "National Theater",
//   description:
//     "Live music concert with top local artists. An unforgettable night of music and entertainment",
//   price: 100,
//   status: "available",
//   _id: "2",
// }}
// ></Event>
// {/* Event 3 */}
// <Event
// event={{
//   name: "Music Event",
//   image: imageForEvent,
//   category: "Music",
//   date: "June 15, 2025",
//   venue: "National Theater",
//   description:
//     "Live music concert with top local artists. An unforgettable night of music and entertainment.",
//   price: 900,
//   status: "available",
//   _id: "3",
// }}
// ></Event>
