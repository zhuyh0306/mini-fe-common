<template>
  <a-layout>
    <a-layout-sider width="50vw">Sider</a-layout-sider>
    <a-layout-content>Content</a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "editor-page",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-layout-sider {
  width: 40vw !important;
  height: 100vh;
  background: #7dbcea;
}
.ant-layout-footer {
  height: 60px;
  color: #fff;
  background: #7dbcea;
}
</style>
