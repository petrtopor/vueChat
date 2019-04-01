import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD-yqI5Ax-s0yKT2iRSEvEojOtpMT3uOgQ",
  authDomain: "frontend-test-vagiz.firebaseapp.com",
  databaseURL: "https://frontend-test-vagiz.firebaseio.com",
  projectId: "frontend-test-vagiz",
  storageBucket: "frontend-test-vagiz.appspot.com",
  messagingSenderId: "418452311666"
};
firebase.initializeApp(config);



var firebaseRef = firebase.database().ref()
firebase.auth().languageCode = 'ru'

export default firebase
export var messagesRef = firebaseRef.child('Messages')
// [START appVerifier]
// export var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': function(response) {
//     console.log('reCAPTCHA solved, allow signInWithPhoneNumber.')
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });
// [END appVerifier]
