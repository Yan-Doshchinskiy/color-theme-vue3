<template>
  <div :class="classByTheme" class="app">
    <AppSidebar class="app__sidebar" />
    <main class="app__content">
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import AppSidebar from '@/components/AppSidebar.vue';
import useColorThemeStore from '@/store/color-theme';

const colorThemeStore = useColorThemeStore();
const { classByTheme } = toRefs(colorThemeStore);

</script>

<style lang="scss">
.app {
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  height: 100vh;
  background-color: var(--content-bg);
}
</style>
