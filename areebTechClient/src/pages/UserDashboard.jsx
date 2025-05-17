import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Component
import NavBarUA from "../components/NavBarUA";
import Event from "../components/Event";

// Consts And values for headers, domain, .....
import { serverDomain, getHeaderAuth } from "../consts/values";

// 681e09878938998782db720c
const UserDashBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  // Condition: If the token is expired => I will set the token to an empty string, which means there is no valid token, so the user will be redirected to the login page.
  const getEvents = async () => {
    let response;
    try {
      response = await axios.get(
        `${serverDomain}/api/v1/user/getAllEvents/${user._id}`,
        getHeaderAuth(user.role)
      );
      setEvents(response.data.events);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Can't get events for you. Please try again."
      );
      navigate("/login");
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
