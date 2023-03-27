import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "vue3-colorpicker/style.css";
import router from "./router";
import plugins from "./test.plugin";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const app = createApp(App);
app.use(plugins);
app.use(router).mount("#app");
