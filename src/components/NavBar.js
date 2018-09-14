import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { filterBy } from "../actions/todo.action";
import { connect } from "react-redux";
const NavBar = props => {
  return (
    <nav className="navbar is-fixed-top is-black">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            <span className="icon">
              <i className="fas fa-2x fa-calendar" />
            </span>
          </Link>
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/add">
            Add Todo
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">{props.filter}</a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                onClick={e => {
                  e.preventDefault();
                  props.filterBy(e.target.innerHTML);
                }}
              >
                All
              </a>
              <a
                className="navbar-item"
                onClick={e => {
                  e.preventDefault();
                  props.filterBy(e.target.innerHTML);
                }}
              >
                Active
              </a>
              <a
                className="navbar-item"
                onClick={e => {
                  e.preventDefault();
                  props.filterBy(e.target.innerHTML);
                }}
              >
                Completed
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.todo.filter
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({filterBy}, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)( NavBar);
