const regeneratorRuntime = require("regenerator-runtime");
import React from "react";
import { connect } from "react-redux";
import Content from "../partials/content";
import { DoubleBorder } from "../partials/border";
import { getPoliticsData } from "../../actions/times";
import _ from "lodash";
import uuid from "uuid";
import moment from "moment";
import ObserverWrapper from "@emarketeross/simple-react-intersection-observer";

class Politics extends React.Component {
  /**
   * When the component mounts to the DOM, make a request to NYT API
   * for 10 articles.
   */
  async componentDidMount() {
    const politics = await this.props.dispatch(getPoliticsData());
  }

  PoliticsData = () => {
    return this.props.times.politics.map((item, index) => {
      let url;
      const images = item.multimedia.map(image => {
        if (image.format === "superJumbo") {
          url = image.url;
        } else {
          url = "https://source.unsplash.com/random/1600x900";
        }
      });
      return (
        <div key={uuid()} className="RenderContent">
          <div className="divider"> </div>
          <div className="RenderContent column">
            <div className="RenderContent__title ">
              <a href={item.url}>
                {" "}
                <h3 className="text-container"> {item.title} </h3>{" "}
              </a>
            </div>
            <div className="RenderContent__abstract">
              <a href={item.url}> </a>
              <p> {item.abstract}</p>
              <p> {item.subsection}</p>
              <p>
                {" "}
                {moment()
                  .startOf(item.created_date)
                  .fromNow()}
              </p>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="RenderContent-image-wrapper">
            <a className="link-wrapper" href={item.url}>
              <ObserverWrapper>
                <img
                  alt="times"
                  className="image"
                  src={
                    url ||
                    `https://source.unsplash.com/random/1600x900?${item.title}`
                  }
                />{" "}
              </ObserverWrapper>
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="forum"> Politics </h1>
        <DoubleBorder />
        <Content
          path={this.props.match.path}
          politics={() => {
            return this.PoliticsData();
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Politics);
