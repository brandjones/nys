import {
  addEmailError,
  addPasswordError
} from "../../../ny-sentinel-custom/src/actions/error";

/***
Should take contents from a userInput and determine if the user
has entered the email into the correct format. It should also remove any whitespace from the
email.
**/
export const validateAndTrimEmail = email => {
  // Should trim the string and contents.
  email.trim().toLowerCase();
  // Should define the regular expressions.
  const emailRegex = /^\S+@\S+$/;
  // Should test the emailInputValue of the user.
  const emailTest = emailRegex.test(email);

  return emailTest;
};

/***
Should take contents from a passwordInput and determine if the user
has entered the correct format into the input. It should also remove any whitespace from the
password.
**/
export const validateAndTrimPassword = password => {
  // Should trim the string and contents.
  password.trim().toLowerCase();
  // Should define the regular expression.
  const passwordRegex = /^.{8,32}$/;
  // Should test the passwordInputValue of the user.
  const passwordTest = passwordRegex.test(password);
  console.log(passwordTest);

  return passwordTest;
};

/*
Should validate the information from the password and email
fields and return the dispatched action to be sent to reducer
VALIDATED IF UNDEFINED
*/
//
export const validateUserFields = (event, email, password, store) => {
  if (email === "") {
    // Should validate and trim the user's email
    const value = validateAndTrimEmail(email);

    // Email should not be blank. If so, dispatch an error to the redux store.
    const dispatchedValue = !value
      ? store.dispatch(addEmailError("You must enter a valid email"))
      : null;

    return dispatchedValue;
  }

  if (password === "") {
    const passwordValue = validateAndTrimPassword(password);
    console.log(passwordValue);

    // Password should be between 8 and 32 char, if not dispatch an an error to the redux store.
    const dispatchedValue = !passwordValue
      ? store.dispatch(
          addPasswordError("Password must be between 8 and 32 characters")
        )
      : null;

    return dispatchedValue;
  }
};
