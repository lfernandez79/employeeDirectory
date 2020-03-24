import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/SortForm.css";

function SortForm() {

    const location = useLocation();

    return (
        <div className="">
            <div className="container d-flex justify-content-between flex-wrap">
                <Router>
                    <Link to="/">
                        <button className={location.pathname === "/" ? "btn btn-primary" : "btn btn-primary"}>
                            Name
                        </button>
                    </Link>
                    <Link to="/male">
                        <button className={location.pathname === "/male" ? "btn btn-success" : "btn btn-success"}>
                            Men
                        </button>
                    </Link>
                    <Link to="/female">
                        <button className={location.pathname === "/female" ? "btn btn-light" : "btn btn-light"}>
                            Women
                        </button>
                    </Link>
                    <Link to="/sort">
                        <button className={location.pathname === "/sort" ? "btn btn-warning" : "btn btn-warning"}>
                            Alphabetically
                        </button>
                    </Link>
                </Router>
            </div>
        </div>
    );
}

export default SortForm;