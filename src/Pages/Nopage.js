import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <div>
      <main className="main">
        <div className="page-title">
          <div className="container">
            <h1>Page Not Found</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Back To The Home</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nopage;
