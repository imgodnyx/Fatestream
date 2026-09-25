import { createTheme } from "../types";

const tokens = {
  neon: {
    purple: "#8a2be2",
    blue: "#00d4ff",
    pink: "#ff00ff",
    cyan: "#00ffff",
  },
  shade: {
    c25: "#6b4eff",
    c50: "#a78bfa",
    c100: "#8b5cf6",
    c200: "#7c3aed",
    c300: "#6d28d9",
    c400: "#5b21b6",
    c500: "#4c1d95",
    c600: "#3c1675",
    c700: "#2e1065",
    c800: "#1e0a3c",
    c900: "#0f051e",
  },
  dark: {
    c50: "#9ca3af",
    c100: "#6b7280",
    c200: "#4b5563",
    c300: "#374151",
    c400: "#1f2937",
    c500: "#111827",
    c600: "#0f172a",
    c700: "#0b1120",
    c800: "#070a14",
    c900: "#03050a",
  },
  accent: {
    c50: "#22d3ee",
    c100: "#06b6d4",
    c200: "#0891b2",
    c300: "#0e7490",
    c400: "#155e75",
    c500: "#164e63",
  },
};

export default createTheme({
  name: "fatestream",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.neon.purple,
        secondary: tokens.neon.blue,
      },

      pill: {
        background: tokens.shade.c600,
        backgroundHover: tokens.shade.c500,
        highlight: tokens.neon.purple,
        activeBackground: tokens.shade.c500,
      },

      global: {
        accentA: tokens.neon.purple,
        accentB: tokens.neon.blue,
      },

      lightBar: {
        light: tokens.shade.c400,
      },

      buttons: {
        toggle: tokens.shade.c200,
        toggleDisabled: tokens.dark.c400,
        secondary: tokens.dark.c600,
        secondaryHover: tokens.dark.c500,
        purple: tokens.shade.c500,
        purpleHover: tokens.shade.c400,
        cancel: tokens.dark.c400,
        cancelHover: tokens.dark.c300,
      },

      background: {
        main: "#050508",
        secondary: tokens.dark.c600,
        secondaryHover: tokens.dark.c500,
        accentA: tokens.shade.c600,
        accentB: tokens.accent.c500,
      },

      modal: {
        background: tokens.dark.c700,
      },

      type: {
        logo: tokens.neon.blue,
        text: "#e2e8f0",
        dimmed: "#94a3b8",
        divider: tokens.dark.c400,
        secondary: "#cbd5e1",
        link: tokens.neon.blue,
        linkHover: tokens.neon.purple,
      },

      search: {
        background: "rgba(15, 23, 42, 0.8)",
        hoverBackground: "rgba(30, 41, 59, 0.9)",
        focused: "rgba(15, 23, 42, 0.95)",
        placeholder: "#64748b",
        icon: "#94a3b8",
      },

      mediaCard: {
        hoverBackground: tokens.dark.c600,
        hoverAccent: tokens.neon.purple,
        hoverShadow: "#000000",
        shadow: tokens.dark.c800,
        barColor: tokens.dark.c300,
        barFillColor: tokens.neon.blue,
        badge: tokens.dark.c600,
        badgeText: "#e2e8f0",
      },

      largeCard: {
        background: "rgba(15, 23, 42, 0.6)",
        icon: tokens.neon.purple,
      },

      dropdown: {
        background: tokens.dark.c600,
        altBackground: tokens.dark.c700,
        hoverBackground: tokens.dark.c500,
        text: "#e2e8f0",
        secondary: "#94a3b8",
        border: "rgba(139, 92, 246, 0.2)",
        contentBackground: tokens.dark.c600,
      },

      authentication: {
        border: "rgba(139, 92, 246, 0.3)",
        inputBg: tokens.dark.c600,
        inputBgHover: tokens.dark.c500,
        wordBackground: tokens.dark.c500,
        copyText: "#94a3b8",
        copyTextHover: "#e2e8f0",
      },

      settings: {
        sidebar: {
          activeLink: "rgba(139, 92, 246, 0.2)",
          badge: tokens.dark.c900,
          type: {
            secondary: tokens.shade.c200,
            inactive: "#94a3b8",
            icon: "#94a3b8",
            iconActivated: tokens.neon.blue,
            activated: "#e2e8f0",
          },
        },
        card: {
          border: "rgba(139, 92, 246, 0.15)",
          background: "rgba(15, 23, 42, 0.4)",
          altBackground: "rgba(15, 23, 42, 0.6)",
        },
        saveBar: {
          background: "rgba(7, 10, 20, 0.9)",
        },
      },

      utils: {
        divider: "rgba(139, 92, 246, 0.1)",
      },

      errors: {
        card: tokens.dark.c700,
        border: tokens.dark.c400,
        type: {
          secondary: "#94a3b8",
        },
      },

      about: {
        circle: tokens.dark.c500,
        circleText: "#e2e8f0",
      },

      editBadge: {
        bg: tokens.dark.c500,
        bgHover: tokens.dark.c400,
        text: "#e2e8f0",
      },

      progress: {
        background: tokens.dark.c300,
        preloaded: tokens.dark.c300,
        filled: tokens.neon.purple,
      },

      video: {
        buttonBackground: tokens.dark.c400,
        autoPlay: {
          background: tokens.dark.c600,
          hover: tokens.dark.c500,
        },
        scraping: {
          card: tokens.dark.c600,
          loading: tokens.neon.purple,
          noresult: "#94a3b8",
        },
        audio: {
          set: tokens.neon.blue,
        },
        context: {
          background: "rgba(3, 5, 10, 0.95)",
          light: "#e2e8f0",
          border: "rgba(139, 92, 246, 0.2)",
          hoverColor: tokens.dark.c500,
          buttonFocus: tokens.dark.c400,
          flagBg: tokens.dark.c500,
          inputBg: tokens.dark.c600,
          buttonOverInputHover: tokens.dark.c500,
          inputPlaceholder: tokens.dark.c200,
          cardBorder: tokens.dark.c600,
          slider: "#475569",
          sliderFilled: tokens.neon.purple,
          buttons: {
            list: tokens.dark.c600,
            active: tokens.dark.c900,
          },
          closeHover: tokens.dark.c700,
          type: {
            secondary: "#94a3b8",
            accent: tokens.neon.blue,
          },
        },
      },
    },
  },
});
