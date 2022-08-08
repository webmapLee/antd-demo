import { createApp } from 'vue';
import App from './App.jsx';
import Antd from 'ant-design-vue/lib/index.js';
import 'ant-design-vue/dist/antd.css';

console.log('Antd', Antd)

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.mount('#app')