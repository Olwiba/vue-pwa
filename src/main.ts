import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import rg4js from 'raygun4js'

import App from './App.vue'
import router from './router'

// rg4js('apiKey', 'aFEQze4ieuynqWaPvGcg');
rg4js('apiKey', 'TESTING');
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);

const app = createApp(App)

app.config.errorHandler = function(err, vm, info) {
    rg4js('send', {
        error: err,
        customData: [{ info: info }]
    });
};

app.use(createPinia())
app.use(router)

app.mount('#app')