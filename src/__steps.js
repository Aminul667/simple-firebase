/*
* 1. visit console.firebase.google.com 
* 2. create project (except google analytics)
* 3. register app (create configure)
* 4. install firebase: npm install firebase
* 5. add config file to your project
* 6. DANGER: Do not publish or make firebase config to public by pushing those to github
* 7. Visit: Go to Docs > Build > Authentication > Web > Get Started
* 8. Export app from firebase.config.js file
* 9. Login.jsx: import getAuth from firebase/auth
* 10. create const auth = getAuth(app);
* 11. import GoogleAuthProvider and create a new provider
* 12. use signInWithPopUp and pass auth and provider
* 13. activate sign-in method (google, facebook, twitter etc)
*/ 