import "./Profile.css"


import React, { useState ,useEffect} from "react";
import { Link,NavLink,Outlet,useLocation,useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("products");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const products = [
    { id: 1, name: "Used Laptop", desc: "Core i5, 8GB RAM", price: 250, image: "https://placehold.co/300x200?text=adsf" },
    { id: 2, name: "Gaming Mouse", desc: "Logitech G402", price: 35, image: "https://placehold.co/300x100?text=adsffff" },
  ];

  const services = [
    { id: 1, name: "Logo Design", price: 50 },
    { id: 2, name: "Website Audit", price: 80 },
  ];

  const courses = [
    { id: 1, title: "React for Beginners", lessons: 40, duration: "8h", price: 29 },
    { id: 2, title: "Node.js Essentials", lessons: 25, duration: "5h", price: 24 },
  ];

  return (
    <div className="container-fluid mt-4">
      {/* Profile Header */}
      <div className="card mb-4 shadow-sm p-3">
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/80"
            className="rounded-circle me-3"
            alt="User Avatar"
          />
          <div>
            <h4 className="mb-0">John Doe</h4>
            <h6 className="my-1">general user</h6>
            <small className="text-muted">Member since Jan 2024</small>
            <p className="mt-2 mb-0">Bio: Passionate about tech, teaching, and freelancing services.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
           <ul className="nav nav-tabs my-5">
        <li className="nav-item">
          <NavLink to="info" className="nav-link">Info</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="products" className="nav-link">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="services" className="nav-link">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="courses" className="nav-link">Courses</NavLink>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="container-fluid" >
        <Outlet></Outlet>
        {/* {activeTab === "products" && (
          <div className="row row-cols-1 row-cols-md-3 ">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm h-100">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="text-success">${item.price}</p>
                    <Link to={`/edit/product/${item.id}`} className="btn btn-outline-primary btn-sm">Edit</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "services" && (
          <ul className="list-group col-12 col-sm-10 col-md-6 ">
            {services.map((srv) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={srv.id}
              >
                {srv.name}
                <span className="badge bg-primary rounded-pill">${srv.price}</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "courses" && (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {courses.map((course) => (
              <div className="col" key={course.id}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">
                      {course.duration} | {course.lessons} Lessons
                    </p>
                    <p className="text-success">${course.price}</p>
                    <Link to={`/edit/course/${course.id}`} className="btn btn-outline-primary btn-sm">
                      Edit
                    </Link>
*                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>

      {/* Modal to Add New */}
      <div className="modal fade" id="addModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="d-grid gap-2">
                <Link to="add/product" className="btn btn-outline-primary">
                  Add Product
                </Link>
                <Link to="/add/service" className="btn btn-outline-success">
                  Add Service
                </Link>
                <Link to="/add/course" className="btn btn-outline-warning">
                  Add Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
