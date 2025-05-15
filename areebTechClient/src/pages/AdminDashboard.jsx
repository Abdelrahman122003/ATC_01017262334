import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Components
import NavBarUA from "../components/NavBarUA";
import AdminEvent from "../components/AdminEvent";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/admin/getAllEvents`,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("response: ", response.data.data);
      setEvents(response.data?.data || []);
      toast.success(response.data.message);
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
      <main className="main-content">
        <NavBarUA role={"Admin"}></NavBarUA>
        <div className="center">
          <Link to="create" className="btn btn-primary btn-sm en-text">
            Create New Event
          </Link>
        </div>
        {/* <!-- Recent Events Table --> */}
        <h2 className="section-title en-text">Recent Events</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th className="en-text">Event Name</th>
              <th className="en-text">Date</th>
              <th className="en-text">Venue</th>
              <th className="en-text">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <AdminEvent
                key={event._id}
                event={event}
                onDelete={(deletedId) =>
                  setEvents((prev) => prev.filter((e) => e._id !== deletedId))
                }
              />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default AdminDashboard;
