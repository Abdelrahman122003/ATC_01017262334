// import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Pages
import Edit from "../pages/Edit";

// Handlers
import { formatDate } from "../handlers/formatDate";

// Consts And values for headers, domain, .....
import { getHeaderAuth, serverDomain } from "../consts/values";

const AdminEvent = (props) => {
  // Get user from LocalStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const { event, onDelete } = props;
  const handleDeleteEvent = async () => {
    try {
      const response = await axios.delete(
        `${serverDomain}/api/v1/admin/deleteEvent/${event._id}`,
        getHeaderAuth(user.role)
      );
      toast.success(response.data.message);
      if (onDelete) onDelete(event._id);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Can't Delete event!. Please try again."
      );
    }
  };
  return (
    <tr>
      <td className="en-text">{event.name}</td>
      <td>{formatDate(event.date)}</td>
      <td className="en-text">{event.venue}</td>
      <td>
        <div className="table-actions">
          <Link
            to="edit"
            state={{ event }}
            className="btn btn-primary btn-sm en-text"
          >
            {/* <Edit event={event}></Edit> */}
            Edit
          </Link>
          <button
            onClick={handleDeleteEvent}
            className="btn btn-danger btn-sm en-text"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminEvent;
