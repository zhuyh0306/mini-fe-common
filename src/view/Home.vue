<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>
      <a-button type="primary" v-if="!isLogin" @click="login">登陆</a-button>
      <a-dropdown v-else>
        <a class="ant-dropdown-link" @click.prevent>
          {{ name }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="logout"> 登出 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <ColorPicker :value="color" @change="colorChange"></ColorPicker>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ColorPicker from "@/components/ColorPicker.vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "editor-page",
  computed: {
    num() {
      return 22;
    },
  },
  components: {
    ColorPicker,
  },
  setup() {
    const color = ref("#ffffff");
    const router = useRouter();
    const name = "";
    const isLogin = true;
    const colorChange = (e: string) => {
      console.log(e);
      color.value = e;
    };
    const login = () => {
      message.success("登录成功", 2);
    };
    const logout = () => {
      message.success("退出登录，2秒后跳转到首页", 2);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    };
    return {
      name,
      isLogin,
      login,
      logout,
      color,
      colorChange,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-layout-header {
  color: #fff;
  background: #7dbcea;
  height: 60px;
}
.ant-layout-content {
  height: calc(100vh - 120px);
}
.ant-layout-footer {
  height: 60px;
  color: #fff;
  background: #7dbcea;
}
</style>
