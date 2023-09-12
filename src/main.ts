import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import rg4js from 'raygun4js'

import App from './App.vue'
import router from './router'

// Raygun setup
// please remember to replace the api key with your own
rg4js('apiKey', 'ENTER_API_KEY_HERE');
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);
// this enables raygun to save events if the user is offline
rg4js('saveIfOffline', true);

const app = createApp(App)

// adding error handler middleware to the application
app.config.errorHandler = function(err, vm, info) {
    rg4js('send', {
        error: err,
        customData: [{ info: info }]
    });
};

app.use(createPinia())
app.use(router)

app.mount('#app')