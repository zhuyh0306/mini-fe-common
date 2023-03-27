import { App } from "vue";
import LTextVue from "./components/LText/LText.vue";
const plugins = {
  install: (app: App) => {
    app.config.globalProperties.$alert = () => {
      console.log("a $alert");
    };
    app.component("l-text", LTextVue);
  },
};
export default plugins;
