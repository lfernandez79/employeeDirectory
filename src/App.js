import React, { Component } from 'react';
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";

var employeeList;

class App extends Component {

  state = {
    employees: []
  };

  componentDidMount() {
    API.getUsers()
      .then((result) => employeeList = result.data.results)
      .then(() => this.setState({ employees: employeeList }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.employees.map(employee => <EmployeeCard firstName={employee.name.first} lastName={employee.name.last}
          email={employee.email} phone={employee.phone} src={employee.picture.medium} />)}
      </div>
    );
  }
}

export default App;