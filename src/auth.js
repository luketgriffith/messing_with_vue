import jwt_decode from 'jwt-decode';
// import UserActions from '../actions/userActions';
import Crypto from 'crypto-js';

function getQueryString (field, url) {
  var href = url ? url : window.location.href,
    reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' ),
    string = reg.exec(href);

  return string ? string[1] : null;
}

function authenticateUser() {
  let jwt = getQueryString('jwt');
  let session = localStorage.getItem('sessionID');

  if(!jwt && !session) {
    localStorage.clear();
    window.location.href = 'https://jwt.redventures.com/login?RelayState=' + window.location.href;
  } else {
    // Set jwt in localstorage as sessionID
    if(jwt) localStorage.setItem('sessionID', jwt);

    // Trigger action to set decoded info to state
    let decoded = jwt_decode(localStorage.getItem('sessionID'));

    // Test if decoded token is expired
    let isExpired = decoded.exp - Math.floor(Date.now() / 1000);
    if (isExpired > 0) {
      // it's still a valid token
      let hash = Crypto.MD5(decoded.emailAddress);
      let userData = {
        idToken: localStorage.getItem('sessionID'),
        email: decoded.emailAddress,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        image: 'https://www.gravatar.com/avatar/' + hash + '?s=60?d=mm'
      };
      localStorage.setItem('user', userData)
      return userData;
      // Set okta user data in state
      // dispatch(UserActions.setOktaUser(userData));      
    } else {
      // token is expired, auto log user out
      logOutUser();
    }

  }
}

function logOutUser() {
  // Clear out localStorage
  localStorage.clear();

  // Flush out user data from state
  // dispatch(UserActions.flushCurrentUser());

  // Redirect to jwt.redventures
  window.location.href = 'https://jwt.redventures.com/login?RelayState=' + window.location.href;
}

export { authenticateUser, logOutUser };