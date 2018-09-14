import React, { Component } from "react";
import InputField from "./InputField";
import { addTodo, makeTodoCompleted } from "../../actions/todo.action";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { bindActionCreators } from "redux";
import { formatDate, parseDate } from "react-day-picker/moment";
import { connect } from "react-redux";


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      lastDate: null
    };
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
   // console.log(this.props);
    let todo = {
      name: this.state.name,
      description: this.state.description,
      lastDate: this.state.lastDate,
      dateAdded: new Date(),
      completed: false
    };
    this.props.addTodo(todo);
  };
  handleDateClick = date => {
    this.setState({ lastDate: date });
  };
  render() {
    //console.log(this.state);
    return (
      <form className="form-horizontal login-form main-content">
        <InputField
          type="text"
          placeholder="name"
          name="name"
          className="input"
          onChange={this.onChangeHandler}
          label="Name of Todo"
        />
        <InputField
          className="textarea"
          type="textarea"
          placeholder="description"
          onChange={this.onChangeHandler}
          name="description"
          label="Description"
        />

        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder="MM/DD/YYYY"
          component={Input}
       
          onDayChange={this.handleDateClick}
        />

        <div className="field">
          <button
            className="button is-success"
            type="submit"
            onClick={this.formSubmit}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
class Input extends Component {
  render() {
    return (
      <div className="field">
        <label className="label">Final Date</label>
        <div className="control">
          <input className="input date-picker" {...this.props} onChange={(e)=>{}}/>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addTodo: addTodo, makeTodoCompleted: makeTodoCompleted },
    dispatch
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(TodoForm);
