// Initialize Firebase
var config = {
  // apiKey: "AIzaSyB8ytmPxxDnbtBOny3hIDpOo4pY-UMuVjs",
  // authDomain: "titan-9e46d.firebaseapp.com",
  // projectId: "titan-9e46d",
  // storageBucket: "titan-9e46d.appspot.com",
  messagingSenderId: "716463455775",
  // appId: "1:716463455775:web:3bf8ab37f024cfc5259f2a",
  // measurementId: "G-6EJY0MFR92",
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function () {
    //getToken(messaging);
    return messaging.getToken();
  })
  .then(function (token) {
    console.log(token);
  })
  .catch(function (err) {
    console.log("Permission denied", err);
  });

messaging.onMessage(function (payload) {
  console.log("onMessage: ", payload);
});
