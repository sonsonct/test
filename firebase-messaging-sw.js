importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "716463455775",
  apiKey: "AIzaSyB8ytmPxxDnbtBOny3hIDpOo4pY-UMuVjs",
  projectId: "titan-9e46d",
  appId: "1:716463455775:web:3bf8ab37f024cfc5259f2a",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Notification " + payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: payload.data.icon,
  };

  return self.registration
    .showNotification(notificationTitle, notificationOptions)
    .then(() => {
      // Add event listener to handle notification click
      self.addEventListener("notificationclick", function (event) {
        event.notification.close(); // Close the notification

        // Navigate to a.com
        event.waitUntil(clients.openWindow("http://127.0.0.1:5500/a.html"));
      });
    });
});
