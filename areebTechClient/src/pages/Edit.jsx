import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavBarUA from "../components/NavBarUA";
// To fetching Api
import axios from "axios";
// Style messages for user
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Handlers
import { formatToInputDate } from "../handlers/formatToInputDate";

// Consts And values for headers, domain, .....
import { getHeaderAuth, serverDomain } from "../consts/values";

const Edit = () => {
  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};
  const [formData, setFormData] = useState({
    name: event.name || "",
    category: event.category || "",
    date: event.date || "",
    venue: event.venue || "",
    price: event.price || 0,
    image: event.image || "",
    description: event.description || "",
  });

  const handleEditForm = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.patch(
        `${serverDomain}/api/v1/admin/updateEvent/${event._id}`,
        {
          name: formData.name,
          category: formData.category,
          date: formData.date,
          venue: formData.venue,
          price: formData.price,
          image: formData.image,
          description: formData.description,
        },
        getHeaderAuth(user.role)
      );
      toast.success(response.data.message);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error.message);
      toast.error(
        error.response?.data?.message ||
          "Failed to edit the event. Please try again."
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setFormData(formData);
  }, [formData]);
  return (
    <>
      <NavBarUA role={"Admin"} username={"Admin"}></NavBarUA>
      <div className="container">
        <form className="edit-form" method="POST" onSubmit={handleEditForm}>
          <div className="form-row">
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="event-name" className="form-label">
                  Event Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="event-name"
                  value={formData.name}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="event-category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  id="event-category"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="Music">Music</option>
                  <option value="Business">Business</option>
                  <option value="Tech">Technology</option>
                  <option value="Sport">Sports</option>
                  <option value="Art">Art</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="event-date" className="form-label">
                  Event Date
                </label>
                <input
                  name="date"
                  value={formatToInputDate(formData.date)}
                  type="date"
                  id="event-date"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="event-venue" className="form-label">
                  Venue
                </label>
                <input
                  name="venue"
                  value={formData.venue}
                  type="text"
                  id="event-venue"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="event-price" className="form-label">
                  Price (egy)
                </label>
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  id="event-price"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="event-image" className="form-label">
              Event Image
            </label>
            <input
              name="image"
              type="file"
              id="event-image"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="event-description" className="form-label">
              Event Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              id="event-description"
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save"></i> Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
