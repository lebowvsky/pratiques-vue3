<template>
  <button @click="handleButton">{{ text }}</button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ text: string }>(), { text: "bouton" });

const emits = defineEmits<{ (e: "handleButton"): void }>();
const handleButton = () => {
  emits("handleButton");
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
