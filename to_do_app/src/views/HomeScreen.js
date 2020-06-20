import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  // adding all items retrieved form the JSON server to the tasks array
  componentDidMount() {
    Axios.get("http://localhost:4300/tasks").then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  deleteTask(id) { // <-- declare id parameter
    Axios.delete(`http://localhost:4300/tasks/${id}`) // <-- removing selected record ;
      .then(() => {
        // Issue GET request after item deleted to get updated list
        // that excludes user of id
        return Axios.get(`http://localhost:4300/tasks`);
      })
      .then((response) => {
        this.setState({ tasks: response.data });
      });
  }

  render() {
    return (
      <div>
        <img
          className="pb-3 img-fluid "
          src="https://www.maccsuso.org.uk/wp-content/uploads/2020/03/things-to-do.png"
        />

        {/* bootstrap responsive table */}
        <div className="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Creation</th>
              </tr>
            </thead>
            {/* displaying all items from the tasks array using map function*/}
            {this.state.tasks.map((task) => (
              <tbody>
                <tr>
                  <th scope="row">{task.id}</th>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{task.creation}</td>

                  {/* passing record ID to deleteTask function*/}
                  <td>
                    {" "}
                    <button
                      onClick={() => this.deleteTask(task.id)}
                      className="btn btn-danger "
                    >
                      Delete
                    </button>
                  </td>

                  {/* passing record ID to details page */}
                  <td>
                    {" "}
                    <button
                      onClick={() =>
                        this.props.history.push(`/details/${task.id}`)
                      }
                      className="btn btn-warning "
                    >
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            ))} 
            {/* both buttons edit and delete were inside the map function to be able to get IDs of selected records */}
          </table>
        </div>
        <div className="d-block d-sm-none">Swipe right for more details</div>
        <div className="d-flex flex-row-reverse">
          {/* add new task button redirect us to AddForm screen */}
          <button
            onClick={() => this.props.history.push("/form")}
            className="btn btn-primary "
          >
            Add New Task
          </button>
        </div>
      </div>
    );
  }
}
