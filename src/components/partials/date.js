const regeneratorRuntime = require("regenerator-runtime");
import React from "react";
import { connect } from "react-redux";
import { store } from "../../store";
import { setTime, stopTime } from "../../actions/ui";

class Date extends React.Component {
  async fireTimerActionCreator() {
    await store.dispatch(setTime());
  }

  async fireTimerInterval() {
    await setInterval(() => this.fireTimerActionCreator(), 1000);
  }

  componentDidMount() {
    this.interval = this.fireTimerInterval();
  }

  componnentWillUnmount() {
    this.props.dispatch(stopTime(this.interval));
  }

  render() {
    return (
      <div className="FullScreenDate">
        <div className="time">{this.props.ui.time}</div>
        <div className="logo"> New York Sentinel </div>
        <div className="news">Today's News</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ui: state.ui
  };
};

export default connect(mapStateToProps)(Date);
