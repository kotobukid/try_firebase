import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('firebase', firebaseApp)
app.provide('auth', auth)

app.mount('#app')
