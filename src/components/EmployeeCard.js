import React from "react";
import "./css/EmployeeCard.css"

//display first name, last name, email, phone number, picture
function EmployeeCard(props) {
    return (
        <div>
            <div className="employeeCard row">
                <span className="col-lg-3 col-md-6"><img src={props.src} alt={props.firstName}></img></span>
                <p className="col-lg-3 col-md-6"><span className="employeeInfo">{props.firstName} {props.lastName}</span></p>
                <p className="col-lg-3 col-md-6"><span className="employeeInfo">{props.email}</span></p>
                <p className="col-lg-3 col-md-6"><span className="employeeInfo">{props.phone}</span></p>
            </div>
            <hr></hr>
        </div>
    );
}

export default EmployeeCard;