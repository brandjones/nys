const regeneratorRuntime = require("regenerator-runtime");
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import moment from "moment";

// Should return pages within the application.
import Home from "../src/components/pages/home";
import LoginPage from "../src/components/pages/login";
import Subscribe from "../src/components/pages/subscribe";
import Technology from "../src/components/pages/technology";
import World from "../src/components/pages/world";
import Politics from "../src/components/pages/politics";
import Health from "../src/components/pages/health";
import Business from "../src/components/pages/business";
import National from "../src/components/pages/national";
import Opinion from "../src/components/pages/opinion";
import Science from "../src/components/pages/science";
import Sports from "../src/components/pages/sports";
import Books from "../src/components/pages/books";
import Arts from "../src/components/pages/arts";

// Should return components within the application.
import Header from "../src/components/partials/header";
import Sidebar from "../src/components/partials/sidebar";
import Footer from "../src/components/partials/footer";
import TopTabletBar from "../src/components/partials/toptabletbar";
import { GreyBorder } from "../src/components/partials/border";
import FullScreenLinkMenu from "../src/components/partials/fullscreenlinkmenu";
import FullScreenDate from "../src/components/partials/fullscreendate";
import Modal from "../src/components/partials/modal";
import Spinner from "../src/components/partials/spinner";

import {
  getWorldData,
  getArtsData,
  getNationalData,
  getPoliticsData,
  getTechnologyData,
  getHealthData,
  getBusinessData,
  getOpinionData,
  getScienceData,
  getSportsData,
  getBooksData
} from "./actions/times";

import { store } from "./store";
import "../src/styles/base/base.css";

// helper function obj.
import EVENT from "./event";
/*
1. Once the application renders to the screen make a request to the NYT API
2. Make sure there is a loader because the request will take some amount of time
3. Render all the content on the screen by accessing the correct properties
4. Connect to the unsplashed API if need be to get images
*/

//

class Sentinel extends React.Component {
  constructor(props) {
    super(props);

    this.app = React.createRef();

    this.state = {
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      userMenuState: false,
      hamburgerMenuState: false,
      email: "",
      loading: false,
      password: "",
      note: true
    };
  }

  tick() {
    this.setState(previousstate => ({
      time: moment().format("MMMM Do YYYY, h:mm:ss a")
    }));
  }

  async componentDidMount() {
    this.pathname = window.location.pathname;
    this.interval = setInterval(() => this.tick(), 1000);

    // await store.dispatch(getWorldData());
    // await store.dispatch(getArtsData());
    // await store.dispatch(getNationalData());
    // await store.dispatch(getPoliticsData());
    // await store.dispatch(getTechnologyData());
    // await store.dispatch(getHealthData());
    // await store.dispatch(getBusinessData());
    // await store.dispatch(getOpinionData());
    // await store.dispatch(getScienceData());
    // await store.dispatch(getSportsData());
    // await store.dispatch(getBooksData());
  }

  componnentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleHamburgerState = event => {
    const node = this;
    return EVENT.toggleHamburgerState(event, node);
  };

  toggleUserMenuState = event => {
    const node = this;
    return EVENT.toggleUserMenuState(event, node);
  };

  onLogoffClick = event => {
    const node = this;
    return EVENT.onLogoffClick(event, node, store);
  };

  render() {
    const node = this.app.current;
    const session = window;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div ref={this.app}>
            {/* <Route
              exact
              path="*"
              render={({ match, location, history }) => (
                <Modal
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <div>
              <div className="container">
                <Route
                  exact
                  render={({ match, location, history }) => (
                    <TopTabletBar
                      toggleHamburgerState={this.toggleHamburgerState}
                      toggleUserMenuState={this.toggleUserMenuState}
                      node={node}
                      match={match}
                      history={history}
                      location={location}
                      state={this.state}
                    />
                  )}
                />
              </div>
              <div>
                <Route
                  exact
                  render={({ match, location, history }) => (
                    <FullScreenDate
                      toggleHamburgerState={this.toggleHamburgerState}
                      toggleUserMenuState={this.toggleUserMenuState}
                      node={node}
                      time={this.state.time}
                      match={match}
                      history={history}
                      location={location}
                      state={this.state}
                    />
                  )}
                />

                <Route
                  exact
                  path="*"
                  render={({ match, location, history }) => (
                    <GreyBorder
                      toggleHamburgerState={this.toggleHamburgerState}
                      toggleUserMenuState={this.toggleUserMenuState}
                      node={node}
                      match={match}
                      history={history}
                      location={location}
                      state={this.state}
                    />
                  )}
                />

                <Route
                  exact
                  render={({ match, location, history }) => (
                    <FullScreenLinkMenu
                      toggleHamburgerState={this.toggleHamburgerState}
                      toggleUserMenuState={this.toggleUserMenuState}
                      node={node}
                      match={match}
                      history={history}
                      location={location}
                      state={this.state}
                    />
                  )}
                />
              </div>
            </div> */}

            {/* <Route
              exact
              path="*"
              render={({ match, location, history }) => (
                <Header
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                  node={node}
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                />
              )}
            /> */}

            {/* <Route
              exact
              path="/"
              styles
              render={({ match, location, history }) => (
                <Home
                  time={this.state.time}
                  onClick={this.state.onLoginClick}
                  state={this.state}
                  results={this.state.results}
                  match={match}
                  location={location}
                  history={history}
                />
              )}
            /> */}
            {/* 
            <Route
              path="/world"
              render={({ match, location, history }) => (
                <World
                  onChange={event => {
                    const node = this;
                    return EVENT.onLoginFormChange(event, node, store);
                  }}
                  onClick={event => {
                    const node = this;
                    event.preventDefault();
                    return EVENT.onLoginButtonClick(
                      event,
                      node,
                      store,
                      match,
                      location,
                      history,
                      session
                    );
                  }}
                  session={session}
                  email={this.state.email}
                  password={this.state.password}
                  match={match}
                  history={history}
                  location={location}
                />
              )}
            />

            <Route
              path="/arts"
              render={({ match, location, history }) => (
                <Arts
                  onChange={event => {
                    const node = this;
                    return EVENT.onLoginFormChange(event, node, store);
                  }}
                  onClick={event => {
                    const node = this;
                    event.preventDefault();
                    return EVENT.onLoginButtonClick(
                      event,
                      node,
                      store,
                      match,
                      location,
                      history,
                      session
                    );
                  }}
                  session={session}
                  email={this.state.email}
                  password={this.state.password}
                  match={match}
                  history={history}
                  location={location}
                />
              )}
            />

            <Route
              exact
              path="/books"
              styles
              render={({ match, location, history }) => (
                <Books
                  time={this.state.time}
                  onClick={this.state.onLoginClick}
                  state={this.state}
                  results={this.state.results}
                  match={match}
                  location={location}
                  history={history}
                />
              )}
            />

            <Route
              path="/science"
              render={({ match, location, history }) => (
                <Science
                  onChange={event => {
                    const node = this;
                    return EVENT.onLoginFormChange(event, node, store);
                  }}
                  onClick={event => {
                    const node = this;
                    event.preventDefault();
                    return EVENT.onLoginButtonClick(
                      event,
                      node,
                      store,
                      match,
                      location,
                      history,
                      session
                    );
                  }}
                  session={session}
                  email={this.state.email}
                  password={this.state.password}
                  match={match}
                  history={history}
                  location={location}
                />
              )}
            />
            <Route
              path="/sports"
              render={({ location, match, history }) => (
                <Sports
                  onChange={event => {
                    const node = this;
                    return EVENT.onSubscribeFormChange(event, node, store);
                  }}
                  onClick={event => {
                    const node = this;
                    event.preventDefault();
                    return EVENT.onSubscribeButtonClick(
                      event,
                      node,
                      store,
                      match,
                      location,
                      history
                    );
                  }}
                  email={this.state.email}
                  password={this.state.password}
                  match={match}
                  history={history}
                  location={location}
                />
              )}
            />

            <Route
              path="/login"
              render={({ match, location, history }) => (
                <LoginPage
                  onChange={event => {
                    const node = this;
                    return EVENT.onLoginFormChange(event, node, store);
                  }}
                  onClick={event => {
                    const node = this;
                    event.preventDefault();
                    return EVENT.onLoginButtonClick(
                      event,
                      node,
                      store,
                      match,
                      location,
                      history,
                      session
                    );
                  }}
                  session={session}
                  email={this.state.email}
                  password={this.state.password}
                  match={match}
                  history={history}
                  location={location}
                />
              )}
            />

            <Route
              path="/subscribe"
              render={({ location, match, history }) =>
                match ? (
                  <Subscribe
                    onChange={event => {
                      const node = this;
                      return EVENT.onSubscribeFormChange(event, node, store);
                    }}
                    onClick={event => {
                      const node = this;
                      event.preventDefault();
                      return EVENT.onSubscribeButtonClick(
                        event,
                        node,
                        store,
                        match,
                        location,
                        history
                      );
                    }}
                    email={this.state.email}
                    password={this.state.password}
                    match={match}
                    history={history}
                    location={location}
                  />
                ) : null
              }
            />

            <Route
              path="/technology"
              render={({ match, location, history }) => (
                <Technology
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <Route
              path="/business"
              render={({ match, location, history }) => (
                <Business
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <Route
              path="/opinion"
              render={({ match, location, history }) => (
                <Opinion
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <Route
              path="/politics"
              render={({ match, location, history }) => (
                <Politics
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <Route
              path="/health"
              render={({ match, location, history }) => (
                <Health
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            />

            <Route
              path="/national"
              render={({ match, location, history }) => (
                <National
                  match={match}
                  history={history}
                  location={location}
                  state={this.state}
                  node={node}
                  onClick={this.onLogoffClick}
                  toggleHamburgerState={this.toggleHamburgerState}
                  toggleUserMenuState={this.toggleUserMenuState}
                />
              )}
            /> */}

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

const App = props => {
  return <Spinner props={props} /> && <Sentinel />;
};

App.defaultProps = {
  home: "Please wait while the application loads..."
};

ReactDOM.render(<App />, document.querySelector("#app"));
