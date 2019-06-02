import {
  validateAndTrimEmail,
  validateAndTrimPassword,
  validateUserFields
} from "./helpers/index";
import {
  addEmailError,
  addPasswordError,
  removeEmailError
} from "./actions/error";
import { login, subscribe, logoff } from "./actions/auth";

const EVENT = {};

// SHOULD LOG USER OUT OF APPLICATION
EVENT.onLogoffClick = (event, node, store) => {
  // NODE = this
  // PREVENT THE DEFAULT BROWSER BEHAVIOR
  event.preventDefault();

  // IF TARGET NAME EQUALS 'LOGFF'
  if (event.target.name === "logoff") {
    // DISPATCH LOGOFF ACTION CREATOR
    store.dispatch(logoff());
  }
};

// SHOULD TOGGLE HAMBURGERMENU STATE TO TRUE AND FALSE
// 2 PARAMETERS: EVENT, DOCUMENT NODE
EVENT.toggleHamburgerState = (event, node) => {
  // NODE = THIS;
  const modal = node.app.current.children[0];
  const state = node.state;

  // PREVENT THE DEFAULT BROWSER BEHAVIOR
  event.preventDefault();

  // CHECK TO SEE IF MODAL STATE FALSE / CLOSED
  if (state.hamburgerMenuState === false) {
    // SHOW MODAL BY ADDING DISPLAY BLOCK PROP

    // modal.classList.replace("fadeOut", "fadeIn");
    modal.style.visibility = "visible";

    // UPDATE THE STATE TO TRUE / OPEN
    node.setState({ hamburgerMenuState: !node.state.hamburgerMenuState });
  } else {
    // modal.classList.replace("fadeIn", "fadeOut");
    // SHOW MODAL BY ADDING DISPLAY NONE PROP
    modal.style.visibility = "hidden";
    // modal.classList.replace("fadeIn", "fadeOut");
    // UPDATE THE STATE TO FALSE / CLOSED
    node.setState({ hamburgerMenuState: !node.state.hamburgerMenuState });
  }
};

// SHOULD TOGGLE USERMENU STATE TO TRUE AND FALSE
// 2 PARAMETERS: EVENT, DOCUMENT NODE
EVENT.toggleUserMenuState = (event, node) => {
  // NODE = THIS;
  const modal = node.app.current.children[0];
  const state = node.state;

  // PREVENT THE DEFAULT BROWSER BEHAVIOR
  event.preventDefault();

  // CHECK TO SEE IF MODAL STATE FALSE / CLOSED
  if (state.userMenuState === false) {
    // SHOW MODAL BY ADDING DISPLAY BLOCK PROP
    modal.style.display = "block";
    // UPDATE THE STATE TO TRUE / OPEN
    node.setState({ userMenuState: !node.state.userMenuState });
  } else {
    // SHOW MODAL BY ADDING DISPLAY NONE PROP
    modal.style.display = "none";
    // UPDATE THE STATE TO FALSE / CLOSED
    node.setState({ userMenuState: !node.state.userMenuState });
  }
};

// SHOULD ALLOW USER TO LOGIN TO THE APP
// 1 PARAMETER: EVENT OBJ.

EVENT.onLoginFormChange = (event, node, store) => {
  // NODE = THIS (FROM MAIN APP)
  /** Should update the email and password state obj. if the user attempts to
    update the email or password input.
    **/

  if (event.target.name === "email") {
    node.setState({ email: event.target.value });
  }

  if (event.target.name === "password") {
    node.setState({ password: event.target.value });
  }
  const email = node.state.email;
  const password = node.state.password;

  const validatedEmail = validateAndTrimEmail(email);
  const validatedPassword = validateAndTrimPassword(password);

  /*
    Should clear error state if email field is not blank.
    */
  if (!validatedEmail && event.currentTarget.name === "email") {
    store.dispatch(addEmailError("You must enter a valid email"));
  } else if (validatedEmail) {
    store.dispatch(removeEmailError());
  }

  if (!validatedPassword && event.currentTarget.name === "password") {
    store.dispatch(
      addPasswordError("Password must be between 8 and 32 characters")
    );
  }
};

// LOGIN THE USER IN AFTER CLICKING LOGIN BUTTON
// 3 PARAMETERS: EVENT, STORE, APP STATE
EVENT.onLoginButtonClick = (
  event,
  node,
  store,
  match,
  location,
  history,
  session
) => {
  const email = node.state.email;
  const password = node.state.password;

  // Should prevent the default behavior from clicking button
  event.preventDefault();

  // Should perform error checking and dispatch an error action to the redux store if needed
  const action = validateUserFields(event, email, password, store);

  // Should perform request if there is not an action error object.
  if (action === undefined) {
    // Should make an ajax request to 'LOGIN' user
    store.dispatch(login(email, password, session, history));
    // Should clear the form field after the 'login' button is clicked
    node.setState({ email: "", password: "" });
    // Should send user back to home page after request is made
    // history.push("/");
  }
};

// LOGIN THE USER IN AFTER CLICKING LOGIN BUTTON
// 3 PARAMETERS: EVENT, STORE, APP STATE
EVENT.onSubscribeButtonClick = (
  event,
  node,
  store,
  match,
  location,
  history,
  session
) => {
  // NODE === THIS
  const email = node.state.email;
  const password = node.state.password;

  // Should prevent the default behavior from clicking button
  event.preventDefault();
  // Should perform error checking and dispatch an error action to the redux store if needed
  const action = validateUserFields(event, email, password, store);

  // Should perform request if there is not an action error object.
  if (action === undefined) {
    // Set the session storage

    // Should make an ajax request to 'SUBSCRIBE' user
    store.dispatch(subscribe(email, password));
    node.setState({ email: "", password: "" });
  }

  // if(store.getState().error)
};

EVENT.onSubscribeFormChange = (event, node, store) => {
  // NODE = THIS (FROM MAIN APP)
  /** Should update the email and password state obj. if the user attempts to
    update the email or password input.
    **/

  if (event.target.name === "email") {
    node.setState({ email: event.target.value });
  }

  if (event.target.name === "password") {
    node.setState({ password: event.target.value });
  }
  const email = node.state.email;
  const password = node.state.password;

  const validatedEmail = validateAndTrimEmail(email);
  const validatedPassword = validateAndTrimPassword(password);
  /*
    Should clear error state if email field is not blank.
    */

  if (!validatedEmail && event.currentTarget.name === "email") {
    store.dispatch(addEmailError("You must enter a valid email"));
  } else if (validatedEmail) {
    store.dispatch(removeEmailError());
  }

  if (!validatedPassword && event.currentTarget.name === "password") {
    store.dispatch(
      addPasswordError("Password must be between 8 and 32 characters")
    );
  }
};

export default EVENT;
