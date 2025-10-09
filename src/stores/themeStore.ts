import { defineStore } from "pinia";
import { ref } from "vue";

const THEMES = { LIGHT: "light", DARK: "dark" } as const;
const LOCAL_THEME_KEY = "user-pref-theme";

type Themes = (typeof THEMES)[keyof typeof THEMES];

const useThemeStore = defineStore("theme", () => {
    const theme = ref<Themes>(THEMES.LIGHT);

    const setTheme = (value: Themes) => {
        if (value === THEMES.LIGHT) {
            document.body.classList.remove(THEMES.DARK);
        } else {
            document.body.classList.add(THEMES.DARK);
        }

        theme.value = value;
        localStorage.setItem(LOCAL_THEME_KEY, value);
    };

    const isDark = () => {
        return theme.value === THEMES.DARK;
    };

    const cycleThemes = () => {
        setTheme(isDark() ? THEMES.LIGHT : THEMES.DARK);
    };

    const savedTheme = localStorage.getItem(LOCAL_THEME_KEY) as Themes;
    if (savedTheme) setTheme(savedTheme);

    return { theme, setTheme, isDark, cycleThemes };
});

export { useThemeStore };
