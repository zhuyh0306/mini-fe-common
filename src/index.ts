import { App } from "vue";
import LText from "./components/LText";
const components = [LText];

const install = (app: App) => {
  components.forEach((com) => {
    app.component(com.name, com);
  });
};
export { LText, install };
export default { install };
