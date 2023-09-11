<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__header">
      <div class="app-sidebar__title">
        <p class="app-sidebar__date">
        XX.XX.XXXX
        </p>
        <p class="app-sidebar__time">
          XX:XX
        </p>
      </div>
      <button @click="toggleTheme" class="app-sidebar__toggle toggle">
        <div :class="toggleStyle" ></div>
      </button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import useColorThemeStore from '@/store/color-theme';

const colorThemeStore = useColorThemeStore();
const { toggleTheme, colorTheme } = toRefs(colorThemeStore);

const toggleStyle = computed(() => [
  'toggle__button',
  {
    toggle__button_dark: colorTheme.value === 'dark',
  },
]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-sidebar {
  width: 100%;
  padding: 20px;
  border-radius: 0 12px 12px 0;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);

  &__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__toggle {

  }

  .toggle {
    $toggle-height: 15px;
    $toggle-width: 40px;
    height: $toggle-height;
    border-radius: 12px;
    width: 40px;
    background-color: var(--theme-toggle-bg);
    position: relative;
    &__button {
      transition: all 0.3s ease-in-out;
      position: absolute;
      left: 0;
      top: 0;
      width: $toggle-height;
      height: $toggle-height;
      min-width: $toggle-height;
      min-height: $toggle-height;
      border-radius: 50%;
      background-color: var(--theme-toggle-button);
      &_dark {
        transform: translateX($toggle-width - $toggle-height);
      }
    }
  }
}
</style>
