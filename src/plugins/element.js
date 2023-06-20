import app from "../app.js";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import locale from 'element-plus/dist/locale/es.mjs';

app.use(ElementPlus, {
    locale
});