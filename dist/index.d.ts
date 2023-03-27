import * as vue from 'vue';
import { defineComponent, openBlock, createBlock, resolveDynamicComponent, withModifiers, normalizeStyle, withCtx, createTextVNode, toDisplayString, App } from 'vue';

declare const useStylePick: (props: any, pickStyles?: string[]) => vue.ComputedRef<Pick<any, string>>;

declare const useComponentClick: (props: any) => () => void;

declare const componentsDefaultProps: {
    "l-text": {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
            text: string;
            fontSize: string;
            fontFamily: string;
            fontWeight: string;
            fontStyle: string;
            textDecoration: string;
            lineHeight: string;
            textAlign: string;
            color: string;
            backgroundColor: string;
        };
    };
    "l-image": {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
            imageSrc: string;
        };
    };
    "l-shape": {
        props: {
            actionType: string;
            url: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
            borderRadius: string;
            boxShadow: string;
            opacity: number;
            position: string;
            left: string;
            top: string;
            right: string;
            backgroundColor: string;
        };
    };
};
declare const transformToComponentProps: (props: {
    [key: string]: any;
}, extraProps?: {
    [key: string]: any;
} | undefined) => {
    [x: string]: any;
};

const defaultProps = transformToComponentProps(componentsDefaultProps["l-text"].props);
// array that contains style props
var script = defineComponent({
    name: "l-text",
    props: {
        ...defaultProps,
    },
    setup(props) {
        const styleProps = useStylePick(props);
        const handleClick = useComponentClick();
        return {
            styleProps,
            handleClick,
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    onClick: withModifiers(_ctx.handleClick, ["prevent"]),
    style: normalizeStyle(_ctx.styleProps),
    class: "l-text-component"
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick", "style"]))
}

script.render = render;
script.__scopeId = "data-v-6bf95b7a";
script.__file = "src/components/LText/LText.vue";

declare const install: (app: App) => void;

declare const _default: {
    install: (app: App<any>) => void;
};

export { script as LText, _default as default, install };
