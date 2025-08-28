import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-light px-4 py-2 border-bottom" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 align-items-center">
        <li className="breadcrumb-item d-flex align-items-center">
          <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
            <i className="bi bi-house-door-fill me-1"></i> الرئيسية
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                <span className="text-primary fw-semibold">
                  {decodeURIComponent(name)}
                </span>
              ) : (
                <Link to={routeTo} className="text-decoration-none text-dark">
                  {decodeURIComponent(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
