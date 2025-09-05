import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import custom CSS
import './assets/css/custom.css'

// Import views
import Home from './views/Home.vue'
import ProgramDetail from './views/ProgramDetail.vue'
import Transaction from './views/Transaction.vue'
import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import KisahKasih from './views/KisahKasih.vue'
import Privacy from './views/Privacy.vue'
import Terms from './views/Terms.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/program/:id', component: ProgramDetail, props: true },
  { path: '/donasi/:id', component: Transaction, props: true },
  { path: '/tentang-kami', component: AboutUs },
  { path: '/hubungi-kami', component: ContactUs },
  { path: '/kisah-kasih', component: KisahKasih },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')