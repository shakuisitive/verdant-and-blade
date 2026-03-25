import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        serif: ['"Fraunces"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        deep: {
          DEFAULT: "hsl(var(--deep))",
          foreground: "hsl(var(--deep-foreground))",
          tint1: "hsl(var(--deep-tint-1))",
          tint2: "hsl(var(--deep-tint-2))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          tint1: "hsl(var(--primary-tint-1))",
          tint2: "hsl(var(--primary-tint-2))",
          tint3: "hsl(var(--primary-tint-3))",
          shade1: "hsl(var(--primary-shade-1))",
          shade2: "hsl(var(--primary-shade-2))",
          shade3: "hsl(var(--primary-shade-3))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          tint1: "hsl(var(--secondary-tint-1))",
          tint2: "hsl(var(--secondary-tint-2))",
          tint3: "hsl(var(--secondary-tint-3))",
          shade1: "hsl(var(--secondary-shade-1))",
          shade2: "hsl(var(--secondary-shade-2))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          tint1: "hsl(var(--neutral-tint-1))",
          tint2: "hsl(var(--neutral-tint-2))",
          shade1: "hsl(var(--neutral-shade-1))",
          shade2: "hsl(var(--neutral-shade-2))",
          shade3: "hsl(var(--neutral-shade-3))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: "hsl(var(--cream))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        organic: "60% 40% 55% 45% / 40% 60% 40% 60%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
