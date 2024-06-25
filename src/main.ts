import './assets/main.css'

import {type Component, createApp, provide} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import {initializeApp, type FirebaseApp} from "firebase/app";
import {getAuth, type Auth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEYi9dASr59ueR2VRco7_VUW0Dm2C7cvw",
    authDomain: "first-app-a74c6.firebaseapp.com",
    projectId: "first-app-a74c6",
    storageBucket: "first-app-a74c6.appspot.com",
    messagingSenderId: "888622410081",
    appId: "1:888622410081:web:1986705fea73f08c5d3d20"
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(firebaseApp);

const app: Component = createApp(App)

app.use(createPinia())
app.use(router)

provide('firebase', firebaseApp)
provide('auth', auth)

app.mount('#app')
