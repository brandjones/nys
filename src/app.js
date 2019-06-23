const regeneratorRuntime = require("regenerator-runtime");
import "core-js";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DotLoader } from "react-spinners";

/**
 * Import Partials.
 */

import Modal from "../src/components/partials/modal";
import TopMenu from "../src/components/partials/topmenu";

/**
 * Import Pages.
 */

import Footer from "../src/components/partials/footer";
import Login from "../src/components/pages/login";
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
import Home from "../src/components/pages/home";

import { store } from "./store";
import "../src/styles/base/base.css";

import { setTime, stopTime } from "./actions/ui";

class Sentinel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false,
      password: "",
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="DotLoader">
          <div className="DotLoader-container">
            <DotLoader
              sizeUnit={"px"}
              size={175}
              color={"#333"}
              loading={this.state.loading}
              margin="2px"
            />
          </div>
        </div>
      );
    }
    return (
      <Provider store={store}>
        <Router>
          <Route
            children={({ match }) => {
              return (
                <div>
                  <Route component={TopMenu} />
                  <Modal />
                  <Route component={Home} exact path="/" />
                  <Route component={Arts} path="/arts" />
                  <Route component={Books} path="/books" />
                  <Route component={Business} path="/business" />
                  <Route component={Health} path="/health" />
                  <Route component={National} path="/national" />
                  <Route component={Politics} path="/politics" />
                  <Route component={Science} path="/science" />
                  <Route component={Sports} path="/sports" />
                  <Route component={Technology} path="/technology" />
                  <Route component={World} path="/world" />
                  <Route component={Opinion} path="/opinion" />

                  <Route component={Login} path="/login" />
                  <Route component={Subscribe} path="/subscribe" />

                  <Footer />
                </div>
              );
            }}
          />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Sentinel />, document.querySelector("#app"));
