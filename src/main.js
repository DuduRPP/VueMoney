import './assets/main.css'

import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHe1oa97No9-lDBNFHH6U5squFIzfg-Cs',
  authDomain: 'vuemoney-64c1e.firebaseapp.com',
  projectId: 'vuemoney-64c1e',
  storageBucket: 'vuemoney-64c1e.firebasestorage.app',
  messagingSenderId: '892444145075',
  appId: '1:892444145075:web:d212deed484f5fbac907c6',
  measurementId: 'G-GN1D63DHCP',
}

// Initialize Firebase
initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)

// ========== MAIN VUE APP ===============
const app = createApp(App)

const options = {
  // You can set your default options here
}

const vuetify = createVuetify({
    components,
    directives
})

app.use(Toast, options)
app.use(vuetify)
app.use(router)

app.mount('#app')
