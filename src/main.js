import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8p45Tk90swMsGMFKIvI7Dz1P-TYgG-4o",
  authDomain: "vue-auth-82ef4.firebaseapp.com",
  projectId: "vue-auth-82ef4",
  storageBucket: "vue-auth-82ef4.appspot.com",
  messagingSenderId: "821037349794",
  appId: "1:821037349794:web:3fb01e94b4f16ed506d0fb"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
