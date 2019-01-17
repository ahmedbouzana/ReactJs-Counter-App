//imrc
import React, { Component } from "react";

//cc
class Counter extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-1 center-block text-center">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={this.props.counter.value===0?"Disables":""}
            >
              -
            </button>

            <button 
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-success btn-sm m-2"
            >
              +
            </button>

            <button 
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-3"
            >
              X
            </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
