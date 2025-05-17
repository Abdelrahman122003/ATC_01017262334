import { useState } from "react";
import { formatDate } from "../handlers/formatDate";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Consts And values for headers, domain, .....
import { serverDomain, getHeaderAuth } from "../consts/values";

const Event = (props) => {
  const {
    _id,
    price,
    venue,
    description,
    name,
    // category,
    image,
    date,
    status: initialStatus,
  } = props.event;
  const [status, setStatus] = useState(initialStatus);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const bookEvent = async (_id) => {
    let response;
    try {
      response = await axios.post(
        `${serverDomain}/api/v1/user/bookEvent`,
        {
          userId: user._id,
          eventId: _id,
        },
        getHeaderAuth(user.role)
      );
      setStatus("booked");
      toast.success(response.data.message);
      navigate("/congratulation");
    } catch (error) {
      console.log(error);
      toast.error("Booking failed. Please try again.");
    }
  };
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image} alt="Music Event" />
      </div>

      <div className="event-details">
        <h3 className="event-title en-text">{name}</h3>

        <div className="event-meta">
          <span className="event-date en-text">
            <i className="fas fa-calendar-alt"></i>
            {formatDate(date)}
          </span>

          <span className="event-venue en-text">
            <i className="fas fa-map-marker-alt"></i>
            {venue}
          </span>
        </div>

        <p className="event-description en-text">{description}</p>

        <div className="event-footer">
          <span className="event-price en-text">Price: ${price}</span>

          {status === "booked" ? (
            <button className="book-btn booked en-text" disabled>
              {status}
            </button>
          ) : (
            <button className="book-btn en-text" onClick={() => bookEvent(_id)}>
              {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
