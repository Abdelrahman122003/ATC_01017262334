import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component
import NavBarUA from "../components/NavBarUA";
import Event from "../components/Event";

// 681e09878938998782db720c
const UserDashBoard = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    let response;
    try {
      response = await axios.get(
        `http://localhost:3000/api/v1/user/getAllEvents/6819d556d94ff85153da8c88`,
        { headers: { "Content-Type": "application/json" } }
      );
      setEvents(response.data.events);
      toast.success(response.data.message);
      // navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Can't get events for you. Please try again."
      );
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      {/* set username with curr logged user */}
      <NavBarUA role={"User"}></NavBarUA>
      <div className="container">
        <section className="events-list">
          <div className="events-container">
            {events.map((event) => {
              return <Event key={event._id} event={event}></Event>;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDashBoard;
