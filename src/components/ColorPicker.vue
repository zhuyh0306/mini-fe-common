<template>
  <div class="color-picker-container">
    <div class="color-picker-left">
      <input type="color" :value="inputRef" @input="inputClick" />
    </div>
    <ul class="color-picker-right">
      <li v-for="(item, index) in colors" :key="item">
        <div
          v-if="index === colors.length - 1"
          class="color-container transparent-back"
          @click="itemClick(item)"
          :style="{ backgroundColor: item }"
        >
          {{ item }}
        </div>
        <div
          v-else
          class="color-container"
          @click="itemClick(item)"
          :style="{ backgroundColor: item }"
        >
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
const defaultColorList = [
  "#F46060",
  "#F4AA60",
  "#AAF460",
  "#3FBFBF",
  "#BF3FBF",
  "#F7F74E",
];
export default defineComponent({
  props: {
    value: {
      type: String,
    },
    colors: {
      type: Object as PropType<string[]>,
      default: defaultColorList,
    },
  },
  emits: ["change"],
  setup: (props, content) => {
    const inputRef = ref(props.value);
    const inputClick = (e: any) => {
      content.emit("change", e.target.value);
    };
    const itemClick = (e: string) => {
      inputRef.value = e;
      content.emit("change", e);
    };
    return {
      inputClick,
      itemClick,
      inputRef,
    };
  },
});
</script>

<style>
.color-container {
  display: inline-block;
  width: 100px;
  height: 20px;
}
li {
  list-style: none;
}
</style>
