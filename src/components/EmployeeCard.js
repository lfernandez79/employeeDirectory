import React from "react";
// import "./css/EmployeeCard.css"

//display first name, last name, email, phone number, picture
function EmployeeCard(props) {
    return (
        <div>
            <div className="employeeCard">
                <img src={props.src} alt={props.firstName}></img>
                <p style={{display: "flex"}}>{props.firstName} {props.lastName} {props.email} {props.phone}</p>
            </div>
            <hr></hr>
        </div>
    );
}

export default EmployeeCard;