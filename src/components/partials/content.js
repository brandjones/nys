import { connect } from "react-redux";
import technology from "../pages/technology";

/**
 * Return some article content from NYT API.
 */

const Content = ({
  path,
  national,
  arts,
  books,
  business,
  health,
  politics,
  science,
  sports,
  technology,
  world,
  opinion
}) => {
  switch (path) {
    case "/":
      return national();
    case "/books":
      return books();
    case "/opinion":
      return opinion();
    case "/world":
      return world();
    case "/business":
      return business();
    case "/arts":
      return arts();
    case "/health":
      return health();
    case "/national":
      return national();
    case "/politics":
      return politics();
    case "/science":
      return science();
    case "/sports":
      return sports();
    case "/technology":
      return technology();
  }
};

const mapStateToProps = state => {
  return {
    times: state.times
  };
};

export default connect(mapStateToProps)(Content);
