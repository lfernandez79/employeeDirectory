import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/SortForm.css";

function SortForm() {

    const location = useLocation();

    return (
        <div className="jumbotron">
            <div className="container d-flex justify-content-around flex-wrap">
                <Router>
                    <Link to="/">
                        <button className={location.pathname === "/" ? "btn btn-warning" : "btn btn-success"}>
                            Default
                        </button>
                    </Link>
                    <Link to="/male">
                        <button className={location.pathname === "/male" ? "btn btn-warning" : "btn btn-success"}>
                            Filter for Men
                        </button>
                    </Link>
                    <Link to="/female">
                        <button className={location.pathname === "/female" ? "btn btn-warning" : "btn btn-success"}>
                            Filter for Women
                        </button>
                    </Link>
                    <Link to="/sort">
                        <button className={location.pathname === "/sort" ? "btn btn-warning" : "btn btn-success"}>
                            Sort Alphabetically
                        </button>
                    </Link>
                </Router>
            </div>
        </div>
    );
}

export default SortForm;