import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pe: [],
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((Responsive) => Responsive.json())
      .then((findresponsive) => {
        console.log(findresponsive.data);
        this.setState({ pe: findresponsive.data });
      });
  }
  renderPe = () => {
    let users = this.state.pe.map((load, key) => (
      <tr key={load.id}>
        <td>{load.id}</td>
        <td>{load.email}</td>
        <td>{load.first_name}</td>
        <td>{load.last_name}</td>
        <td>{load.avatar ? (<img src={load.avatar} alt=""/>):null}</td>
      </tr>
    ));
    return users;
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Users List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>{this.renderPe()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
