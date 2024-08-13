/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Navbar({
  setCategory,
  toggleFunction,
  mode,
  searchFunction,
}) {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg
        `}
      style={{
        backgroundColor: mode ? "#606060" : "rgba(248, 249, 250)",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            className={`badge 
            bg-${mode ? "light" : "dark"} 
              text-${mode ? "dark" : "light"}
            fs-5`}
            onClick={() => setCategory("top")}
          >
            موقع أخبار
          </span>
        </a>
        <button
          type="button"
          className="btn btn-outline-dark px-2 py-0"
          onClick={() => setMenu((pre) => !pre)}
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className={`${menu ? "expand" : "collapse"} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className={`nav-link 
                text-${mode ? "light" : "dark"} active`}
                aria-current="page"
                onClick={() => setCategory("top")}
              >
                الرئيسية
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link 
                text-${mode ? "light" : "gray"}`}
                onClick={() => setCategory("technology")}
              >
                التيكنولوجيا
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link text-${mode ? "light" : "gray"}`}
                onClick={() => setCategory("business")}
              >
                الأعمال
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link text-${mode ? "light" : "gray"}`}
                onClick={() => setCategory("health")}
              >
                الصحة
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link text-${mode ? "light" : "gray"}`}
                onClick={() => setCategory("sports")}
              >
                الرياضة
              </div>
            </li>
          </ul>
          <div className="form-check form-switch ms-5" onClick={toggleFunction}>
            <label
              className={`form-check-label ms-2 text-${
                mode ? "light" : "gray"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              فاتح / غامق
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 ms-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchFunction(e)}
            />
            <button
              className={`btn btn-outline-${mode ? "light" : "primary"}`}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
