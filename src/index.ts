import { App } from "vue";
import LText from "./components/LText";
import LShape from "./components/LShape";
const components = [LText,LShape];

const install = (app: App) => {
  components.forEach((com) => {
    app.component(com.name, com);
  });
};
export { LText,LShape, install };
export default { install };
