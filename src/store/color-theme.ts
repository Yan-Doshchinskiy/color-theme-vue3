import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type ColorTheme = 'light' | 'dark'

const useColorThemeStore = defineStore('color-theme', () => {
  const colorTheme = ref<ColorTheme>('light');

  const classByTheme = computed(() => ({
    'light-theme': colorTheme.value === 'light',
    'dark-theme': colorTheme.value === 'dark',
  }));

  function updateTheme(theme: ColorTheme) {
    colorTheme.value = theme;
  }

  function toggleTheme() {
    const themes: Record<ColorTheme, ColorTheme> = {
      light: 'dark',
      dark: 'light',
    };
    const newTheme = themes[colorTheme.value];
    updateTheme(newTheme);
  }

  return {
    colorTheme,
    classByTheme,
    updateTheme,
    toggleTheme,
  };
});

export default useColorThemeStore;
