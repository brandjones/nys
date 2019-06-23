import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { toggleModal } from "../../actions/ui";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
  }

  render() {
    const { isModalOpen } = this.props.ui;

    return (
      <CSSTransition
        in={isModalOpen}
        unmountOnExit
        classNames="Modal"
        timeout={5000}
      >
        <div className="Modal-wrapper" ref={this.modal}>
          <div className="Modal-x-icon-wrapper">
            <i
              className="close icon"
              onClick={e => {
                e.preventDefault();
                return this.props.dispatch(toggleModal(false));
              }}
            />
          </div>
          <div className="Modal-border"> </div>
          <div className="Modal-menu-items-wrapper">
            <div className="column-1">
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/national"
              >
                {" "}
                U.S.
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/world"
              >
                {" "}
                World
              </Link>

              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/politics"
              >
                {" "}
                Politics
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/"
              >
                {" "}
                Home
              </Link>
            </div>
            <div className="column-2">
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/science"
              >
                Science
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/sports"
              >
                Sports
              </Link>

              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/books"
              >
                Books
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/arts"
              >
                Arts
              </Link>
            </div>
            <div className="column-3">
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/health"
              >
                Health
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/technology"
              >
                Technology
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/business"
              >
                {" "}
                Business
              </Link>
              <Link
                onClick={e => {
                  this.props.dispatch(toggleModal(false));
                }}
                to="/login"
              >
                {" "}
                Login{" "}
              </Link>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.error,
    ui: state.ui
  };
};

export default connect(mapStateToProps)(Modal);
