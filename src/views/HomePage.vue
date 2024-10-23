<template>
  <main>
    <h1>Liste de users</h1>
    <div class="filters">
      <MonBouton text="Cliquez" />
    </div>
    <div class="lists">
      <SwitchList />
      <SwitchList />
    </div>
  </main>
</template>
<script setup lang="ts">
import SwitchList from "../components/SwitchList.vue";
</script>
<style scoped>
main {
  background-color: blanchedalmond;
  padding: 20px;
}
.filters {
  justify-content: center;
  display: flex;
  gap: 10px;
}
.lists {
  display: flex;
  justify-content: space-between;
}
</style>
