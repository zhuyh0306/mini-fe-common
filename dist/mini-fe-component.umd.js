(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mini-fe-component"] = {}, global.Vue, global["lodash-es"]));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  // the common default props, all the components should have these props
  const commonDefaultProps = {
      // actions
      actionType: "",
      url: "",
      // size
      height: "",
      width: "318px",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      // border type
      borderStyle: "none",
      borderColor: "#000",
      borderWidth: "0",
      borderRadius: "0",
      // shadow and opacity
      boxShadow: "0 0 0 #000000",
      opacity: 1,
      // position and x,y
      position: "absolute",
      left: "0",
      top: "0",
      right: "0",
  };
  const textDefaultProps = {
      // basic props - font styles
      text: "正文内容",
      fontSize: "14px",
      fontFamily: "",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      lineHeight: "1",
      textAlign: "left",
      color: "#000000",
      backgroundColor: "",
      ...commonDefaultProps,
  };
  const imageDefaultProps = {
      imageSrc: "",
      ...commonDefaultProps,
  };
  const shapeDefaultProps = {
      backgroundColor: "",
      ...commonDefaultProps,
  };
  // this contains all default props for all the components
  // useful for inserting new component into the store
  const componentsDefaultProps = {
      "l-text": {
          props: textDefaultProps,
      },
      "l-image": {
          props: imageDefaultProps,
      },
      "l-shape": {
          props: shapeDefaultProps,
      },
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false,
      },
  };
  const transformToComponentProps = (props, extraProps) => {
      const mapProps = lodashEs.mapValues(props, (item) => {
          return {
              type: item.constructor,
              default: item,
          };
      });
      if (extraProps) {
          return { ...mapProps, ...extraProps };
      }
      else {
          return mapProps;
      }
  };

  const defaultStyles = lodashEs.without(Object.keys(textDefaultProps), "actionType", "url", "text");
  const useStylePick = (props, pickStyles = defaultStyles) => {
      return vue.computed(() => lodashEs.pick(props, pickStyles));
  };

  const useComponentClick = (props) => {
      const handleClick = () => {
          if (props.actionType && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return handleClick;
  };

  const extraProps = {
      tag: {
          type: String,
          default: "p",
      },
      ...isEditingProp,
  };
  const defaultProps = transformToComponentProps(componentsDefaultProps["l-text"].props, extraProps);
  // array that contains style props
  var script = vue.defineComponent({
      name: "l-text",
      props: {
          ...defaultProps,
      },
      setup(props) {
          const styleProps = useStylePick(props);
          const handleClick = useComponentClick(props);
          return {
              styleProps,
              handleClick,
          };
      },
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      onClick: vue.withModifiers(_ctx.handleClick, ["prevent"]),
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component"
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick", "style"]))
  }

  script.render = render;
  script.__scopeId = "data-v-6bf95b7a";
  script.__file = "src/components/LText/LText.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [script];
  const install = (app) => {
      components.forEach((com) => {
          app.component(com.name, com);
      });
  };
  var index = { install };

  exports.LText = script;
  exports.default = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
