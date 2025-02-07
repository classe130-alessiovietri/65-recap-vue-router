import { createApp } from 'vue'
import App from './App.vue'

// import './main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { router } from './router.js';

createApp(App).use(router).mount('#app')
