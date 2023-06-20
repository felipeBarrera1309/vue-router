import app from './app.js';
import router from './shared/router'
import './plugins';


app.use(router)
app.mount('#app')
