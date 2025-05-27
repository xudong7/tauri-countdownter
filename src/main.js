import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

// 注册Element Plus
app.use(ElementPlus);

app.mount("#app");
