// main.js (for JavaScript)
import { createApp } from 'vue';
import App from './app.vue'; // Import your root Vue component
import vuetify from './plugins/vuetify'; // Import your Vuetify plugin

createApp(App)
    .use(vuetify) // Use the Vuetify plugin
    .mount('#app'); // Mount your root Vue component to the DOM
