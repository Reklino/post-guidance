const tokens = {
  unit: {
    rem128: 8,
    rem96: 6,
    rem88: 5.5,
    rem64: 4,
    rem56: 3.5,
    rem48: 3,
    rem40: 2.5,
    rem36: 2.25,
    rem32: 2,
    rem28: 1.75,
    rem26: 1.625,
    rem24: 1.5,
    rem22: 1.375,
    rem20: 1.25,
    rem18: 1.125,
    rem16: 1,
    rem15: 0.9375,
    rem14: 0.875,
    rem12: 0.75,
    rem10: 0.625,
    rem8: 0.5,
    rem6: 0.375,
    rem4: 0.25,
    rem2: 0.125,
    rem1: 0.0625,
  },
  spacer: {
    live: {
      "2xs": 4,
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      "2xl": 48,
    },
  },
  size: {
    live: {
      "2xs": 4,
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      "2xl": 48,
      "3xl": 64,
      "4xl": 96,
      "5xl": 128,
    },
  },
  line: {
    live: {
      sm: 1,
      md: 2,
      lg: 4,
    },
  },
  radius: {
    live: {
      sm: 4,
      md: 16,
      lg: 32,
      full: 9999,
    },
  },
  font: {
    beta: {
      "title-h0": "@64",
      "title-h1": "@32",
      "title-h2": "@24",
      "title-h3": "@18",
      "title-h4": "@16",
      "title-h5": "@14",
      "title-h6": "@12",

      10: { size: 10, lineHeight: 16 },
      12: { size: 12, lineHeight: 16 },
      14: { size: 14, lineHeight: 20 },
      16: { size: 16, lineHeight: 20 },
      18: { size: 18, lineHeight: 24 },
      20: { size: 20, lineHeight: 20 },
      24: { size: 24, lineHeight: 28 },
      32: { size: 32, lineHeight: 36 },
      48: { size: 48, lineHeight: 48 },
      64: { size: 64, lineHeight: 64 },
    },
    live: {
      "10-15-bold": {
        weight: "bold",
        size: 10,
        lineHeight: 15,
        letterSpacing: 0.5,
      },
    },
  },
  color: {
    live: {
      global: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        "coolgray-1000": "#000000",
        "coolgray-950": "#04090A",
        "coolgray-900": "#0B1416",
        "coolgray-850": "#0F1A1C",
        "coolgray-800": "#131F23",
        "coolgray-750": "#1A282D",
        "coolgray-700": "#223237",
        "coolgray-650": "#2A3C42",
        "coolgray-600": "#33464C",
        "coolgray-550": "#4B6066",
        "coolgray-500": "#667A80",
        "coolgray-450": "#82959B",
        "coolgray-400": "#A0B0B5",
        "coolgray-350": "#B8C5C9",
        "coolgray-300": "#D2DADD",
        "coolgray-250": "#DAE0E3",
        "coolgray-200": "#E2E7E9",
        "coolgray-150": "#EAEDEF",
        "coolgray-100": "#F2F4F5",
        "coolgray-50": "#F9FAFA",
        "coolgray-0": "#FFFFFF",
        "puregray-950": "#080808",
        "puregray-900": "#131313",
        "puregray-850": "#181818",
        "puregray-800": "#1E1E1E",
        "puregray-750": "#272727",
        "puregray-700": "#303030",
        "puregray-650": "#393939",
        "puregray-600": "#434343",
        "puregray-550": "#5C5C5C",
        "puregray-500": "#767676",
        "puregray-450": "#919191",
        "puregray-400": "#ACACAC",
        "puregray-350": "#C3C3C3",
        "puregray-300": "#D6D6D6",
        "puregray-250": "#DDDDDD",
        "puregray-200": "#E4E4E4",
        "puregray-150": "#EBEBEB",
        "puregray-100": "#F2F2F2",
        "puregray-50": "#F8F8F8",
        "orangered-950": "#190600",
        "orangered-900": "#340E00",
        "orangered-800": "#4F1500",
        "orangered-700": "#721F00",
        "orangered-600": "#962900",
        "orangered-500": "#D93A00",
        "orangered-400": "#FE7C53",
        "orangered-300": "#FFBEA6",
        "orangered-200": "#FFD5C6",
        "orangered-100": "#FFEDE5",
        "orangered-50": "#FFF6F3",
        "red-950": "#1C0004",
        "red-900": "#3A0008",
        "red-800": "#58000C",
        "red-700": "#7E0011",
        "red-600": "#A50016",
        "red-500": "#EB001F",
        "red-400": "#FF6E80",
        "red-300": "#FFADB8",
        "red-200": "#FFCCD2",
        "red-100": "#FFEAED",
        "red-50": "#FFF6F7",
        "sakurapink-950": "#1A0011",
        "sakurapink-900": "#360024",
        "sakurapink-800": "#530037",
        "sakurapink-700": "#770051",
        "sakurapink-600": "#9B006A",
        "sakurapink-500": "#E00096",
        "sakurapink-400": "#FF55BD",
        "sakurapink-300": "#FFA5E3",
        "sakurapink-200": "#FFC5EC",
        "sakurapink-100": "#FFE5F9",
        "sakurapink-50": "#FFF3FB",
        "berrypurple-950": "#16001F",
        "berrypurple-900": "#2E0041",
        "berrypurple-800": "#470062",
        "berrypurple-700": "#66008C",
        "berrypurple-600": "#8700B5",
        "berrypurple-500": "#BC0EFF",
        "berrypurple-400": "#D55EFF",
        "berrypurple-300": "#EEA7FF",
        "berrypurple-200": "#F2C8FF",
        "berrypurple-100": "#FBE6FF",
        "berrypurple-50": "#FCF4FF",
        "periwinkle-950": "#0D0B1F",
        "periwinkle-900": "#1A1741",
        "periwinkle-800": "#272262",
        "periwinkle-700": "#372F8C",
        "periwinkle-600": "#453BB5",
        "periwinkle-500": "#6A5CFF",
        "periwinkle-400": "#988EFF",
        "periwinkle-300": "#C3BDFF",
        "periwinkle-200": "#D8D4FF",
        "periwinkle-100": "#ECEAFF",
        "periwinkle-50": "#F7F6FF",
        "alienblue-950": "#000C1D",
        "alienblue-900": "#00183D",
        "alienblue-800": "#00255D",
        "alienblue-700": "#003584",
        "alienblue-600": "#0045AC",
        "alienblue-500": "#1870F4",
        "alienblue-400": "#629FFF",
        "alienblue-300": "#A7CCFF",
        "alienblue-200": "#C6DCFF",
        "alienblue-100": "#E4EFFF",
        "alienblue-50": "#F3F7FF",
        "lightblue-950": "#000D12",
        "lightblue-900": "#001C26",
        "lightblue-800": "#002A3A",
        "lightblue-700": "#003F56",
        "lightblue-600": "#005472",
        "lightblue-500": "#007FAE",
        "lightblue-400": "#47B0DB",
        "lightblue-300": "#95DCFB",
        "lightblue-200": "#B6E9FF",
        "lightblue-100": "#D9F6FF",
        "lightblue-50": "#ECFAFF",
        "mintgreen-950": "#00100E",
        "mintgreen-900": "#001E1B",
        "mintgreen-800": "#002E28",
        "mintgreen-700": "#00443C",
        "mintgreen-600": "#005A4F",
        "mintgreen-500": "#008675",
        "mintgreen-400": "#45B9AB",
        "mintgreen-300": "#96E1D8",
        "mintgreen-200": "#B7ECE5",
        "mintgreen-100": "#DAF7F4",
        "mintgreen-50": "#ECFBF9",
        "kiwigreen-950": "#021000",
        "kiwigreen-900": "#032200",
        "kiwigreen-800": "#053200",
        "kiwigreen-700": "#084A00",
        "kiwigreen-600": "#0A6000",
        "kiwigreen-500": "#0E8A00",
        "kiwigreen-400": "#55BD46",
        "kiwigreen-300": "#A3E398",
        "kiwigreen-200": "#BFEEB8",
        "kiwigreen-100": "#DFF8DB",
        "kiwigreen-50": "#EEFCED",
        "lime-950": "#0C0E00",
        "lime-900": "#1A1F00",
        "lime-800": "#282F00",
        "lime-700": "#3A4501",
        "lime-600": "#4D5A01",
        "lime-500": "#6B7E01",
        "lime-400": "#A1B33B",
        "lime-300": "#CFDB83",
        "lime-200": "#DFE8A6",
        "lime-100": "#EFF4CC",
        "lime-50": "#F7FAE5",
        "yellow-950": "#100D01",
        "yellow-900": "#251E02",
        "yellow-800": "#382D03",
        "yellow-700": "#504104",
        "yellow-600": "#665505",
        "yellow-500": "#8F7407",
        "yellow-400": "#DBAF00",
        "yellow-300": "#FADB61",
        "yellow-200": "#FFE88F",
        "yellow-100": "#FFF2BD",
        "yellow-50": "#FFFAE5",
        "yelloworange-950": "#150C00",
        "yelloworange-900": "#2C1A00",
        "yelloworange-800": "#432700",
        "yelloworange-700": "#623A00",
        "yelloworange-600": "#814C00",
        "yelloworange-500": "#B06400",
        "yelloworange-400": "#FF9C1A",
        "yelloworange-300": "#FFCD7C",
        "yelloworange-200": "#FFDDA8",
        "yelloworange-100": "#FFF0D3",
        "yelloworange-50": "#FFF7EA",
        "poopbrown-950": "#110B04",
        "poopbrown-900": "#29190A",
        "poopbrown-800": "#3B2510",
        "poopbrown-700": "#54371A",
        "poopbrown-600": "#6E4924",
        "poopbrown-500": "#9A6D3F",
        "poopbrown-400": "#CAA075",
        "poopbrown-300": "#EECCAA",
        "poopbrown-200": "#F6DDC3",
        "poopbrown-100": "#FEEEDD",
        "poopbrown-50": "#FEF7EE",
      },
      light: {
        "primary-visited": "#660099",
        "primary-background": "#24a0ed",
        "primary-background-hover": "#006cbf",
        "danger-content": "#ea0027",
        "success-content": "#46d160",

        "global-black": "black",
        "global-white": "white",
        "global-orangered": "orangered-500",
        "global-alienblue": "#0079d3",
        "global-darkblue": "#1d2535",
        "tone-1": "#1a1a1b",
        "tone-2": "#6a6d6f",
        "tone-3": "#878a8c",
        "tone-4": "#d3d6da",
        "tone-5": "#edeff1",
        "tone-6": "#f6f7f8",
        "tone-7": "#ffffff",
        "action-primary": "@primary-background",
        "action-secondary": "@primary-background-hover",
        "action-upvote": "@global-orangered",
        "action-downvote": "#7193ff",
        "alert-positive": "@success-content",
        "alert-negative": "@danger-content",
        "alert-caution": "#ffb000",
        "identity-admin": "@global-orangered",
        "identity-moderator": "#46d160",
        "identity-self": "#0dd3bb",
        "identity-coins": "#ddbd37",
        "category-live": "@global-orangered",
        "category-nsfw": "#ff3881",
        "category-spoiler": "@tone-1",
        "ui-canvas": "@tone-5",
        "ui-modalbackground": "@tone-7",
        "opacity-highlight": [{ opacity: 0.1, value: "#006cbf" }, "@tone-6"],
        "opacity-08": { opacity: 0.08, value: "#1a1a1b" },
        "opacity-50": { opacity: 0.5, value: "black" },
        scrim: { opacity: 0.3, value: "#1a1a1b" },
      },
      dark: {
        "primary-visited": "#c58af9",
        "primary-background": "#006cbf",
        "primary-background-hover": "#24a0ed",

        "tone-1": "#d7dadc",
        "tone-2": "#818384",
        "tone-3": "#565758",
        "tone-4": "#3a3a3c",
        "tone-5": "#272729",
        "tone-6": "#1a1a1b",
        "tone-7": "#121213",
        "identity-coins": "#ffe600",
        "ui-canvas": "#050505",
        "ui-modalbackground": "@tone-6",
        "opacity-50": { opacity: 0.5, value: "#d7dadc" },
        scrim: { opacity: 0.3, value: "black" },
      },
    },
    beta: {
      global: {},
      light: {
        "global-focus": "lightblue-400",
        "interactive-pressed": { opacity: 0.16, value: "black" },
        "neutral-content": "coolgray-650",
        "neutral-content-disabled": "puregray-300",
        "neutral-content-weak": "coolgray-550",
        "neutral-content-strong": "coolgray-850",
        "neutral-background": "white",
        "neutral-background-disabled": "puregray-50",
        "neutral-background-medium": "puregray-50",
        "neutral-background-strong": "white",
        "neutral-background-hover": "coolgray-100",
        "neutral-border": "puregray-200",
        "neutral-border-weak": "puregray-100",
        "neutral-border-strong": "puregray-600",
        primary: "alienblue-600",
        "primary-hover": "alienblue-700",
        "primary-visited": "berrypurple-600",
        "primary-background": "alienblue-600",
        "primary-background-hover": "alienblue-700",
        "secondary-background": "coolgray-150",
        "secondary-plain": "coolgray-850",
        "secondary-plain-hovered": "black",
        "secondary-plain-weak": "coolgray-550",
        "secondary-background-hover": "coolgray-200",
        "danger-background": "red-500",
        "danger-background-disabled": "red-200",
        "danger-background-hover": "red-600",
        "danger-content": "red-600",
        "danger-content-default": "white",
        "brand-background": "orangered-500",
        "brand-background-hover": "orangered-600",
        "media-background": { opacity: 0.54, value: "black" },
        "media-background-hover": { opacity: 0.75, value: "black" },
        "media-onbackground-disabled": { opacity: 0.25, value: "white" },
        "success-content": "kiwigreen-500",
        "warning-content": "yellow-500",

        "brand-gradient-default": [
          "180deg",
          { opacity: 1, value: "orangered-500", position: 0 },
          { opacity: 1, value: "#db3b00", position: 30 },
          { opacity: 1, value: "orangered-600", position: 100 },
        ],
        "brand-gradient-default-highlight": [
          "258deg",
          { opacity: 0, value: "#db3f00", position: 80 },
          { opacity: 1, value: "orangered-500", position: 100 },
        ],
        "brand-gradient-hover": [
          "180deg",
          { opacity: 1, value: "#e23d00", position: 15 },
          { opacity: 1, value: "#cb3600", position: 49 },
          { opacity: 1, value: "#b43000", position: 100 },
        ],
        "brand-gradient-hover-highlight": [
          "323deg",
          { opacity: 0, value: "#cb3600", position: 65 },
          { opacity: 1, value: "#cb3600", position: 100 },
        ],
        "brand-gradient-active": [
          "180deg",
          { opacity: 1, value: "#cd3700", position: 0 },
          { opacity: 1, value: "#db3b00", position: 68 },
          { opacity: 1, value: "orangered-500", position: 100 },
        ],
        "brand-gradient-active-highlight": [
          "83deg",
          { opacity: 0, value: "#db3f00", position: 80 },
          { opacity: 1, value: "orangered-500", position: 100 },
        ],

        "transparent-background-hover": { opacity: 0.1, value: "coolgray-450" },
        "global-black": "black",
        "global-white": "white",
        "global-orangered": "orangered-500",
        "global-alienblue": "alienblue-500",
        "global-darkblue": "coolgray-800",
        "tone-1": "puregray-900",
        "tone-2": "puregray-600",
        "tone-3": "puregray-400",
        "tone-4": "puregray-200",
        "tone-5": "puregray-100",
        "tone-6": "puregray-50",
        "tone-7": "white",
        "action-upvote": "orangered-500",
        "action-downvote": "periwinkle-500",
        "alert-caution": "yellow-500",
        "identity-admin": "orangered-500",
        "identity-moderator": "kiwigreen-500",
        "identity-self": "mintgreen-500",
        "identity-coins": "yellow-400",
        "category-live": "orangered-500",
        "category-nsfw": "sakurapink-500",
        "category-spoiler": "@tone-1",
        "ui-canvas": "@tone-5",
        "ui-modalbackground": "@tone-7",
        "avatar-gradient": [
          "0deg",
          { opacity: 1, value: "coolgray-300", position: 0 },
          { opacity: 1, value: "coolgray-0", position: 75 },
        ],
        "opacity-highlight": [
          { opacity: 0.1, value: "alienblue-800" },
          "@tone-6",
        ],
        "opacity-08": { opacity: 0.08, value: "puregray-900" },
        "opacity-50": { opacity: 0.5, value: "black" },
        scrim: { opacity: 0.4, value: "black" },
      },
      dark: {
        "global-focus": "lightblue-500",
        "interactive-pressed": { opacity: 0.16, value: "white" },
        "neutral-content": "coolgray-350",
        "neutral-content-disabled": "puregray-700",
        "neutral-content-weak": "coolgray-450",
        "neutral-content-strong": "white",
        "neutral-background": "coolgray-900",
        "neutral-background-medium": "coolgray-900",
        "neutral-background-strong": "coolgray-850",
        "neutral-background-hover": "coolgray-800",
        "neutral-border": "puregray-600",
        "neutral-border-weak": "puregray-800",
        "neutral-border-strong": "puregray-200",
        primary: "alienblue-400",
        "primary-hover": "alienblue-300",
        "primary-visited": "berrypurple-400",
        "primary-background": "alienblue-600",
        "primary-background-hover": "alienblue-500",
        "secondary-plain": "coolgray-100",
        "secondary-plain-hovered": "white",
        "secondary-plain-weak": "coolgray-450",
        "secondary-background": "coolgray-750",
        "secondary-background-hover": "coolgray-700",
        "danger-background": "red-500",
        "danger-background-disabled": "red-900",
        "danger-background-hover": "red-500",
        "danger-content": "red-400",
        "success-content": "kiwigreen-500",
        "brand-background": "orangered-500",
        "brand-background-hover": "orangered-600",
        "tone-1": "puregray-100",
        "tone-2": "puregray-400",
        "tone-3": "puregray-600",
        "tone-4": "puregray-700",
        "tone-5": "puregray-800",
        "tone-6": "puregray-900",
        "tone-7": "puregray-950",
        "action-upvote": "orangered-400",
        "action-downvote": "periwinkle-400",
        "ui-canvas": "puregray-950",
        "ui-modalbackground": "puregray-900",
        "avatar-gradient": [
          "0deg",
          { opacity: 1, value: "coolgray-650", position: 0 },
          { opacity: 1, value: "coolgray-900", position: 75 },
        ],
        "transparent-background-hover": { opacity: 0.1, value: "coolgray-500" },
        "opacity-50": { opacity: 0.5, value: "puregray-100" },
        scrim: { opacity: 0.6, value: "black" },
      },
    },
  },
  elevation: {
    beta: {
      light: {
        "focus-ring": {
          color: "@global-focus",
          x: 0,
          y: 0,
          b: 0,
          s: 4,
        },
        "focus-ring-reset": {
          color: "transparent",
          x: 0,
          y: 0,
          b: 0,
          s: 4,
        },
        "sm-inset": {
          color: { opacity: 0.13, value: "black" },
          x: 0,
          y: 1,
          b: 2,
          s: 0,
          inset: true,
        },
      },
    },
    live: {
      light: {
        xs: {
          color: { opacity: 0.25, value: "black" },
          x: 0,
          y: 1,
          b: 2,
          s: 0,
        },
        sm: [
          {
            color: { opacity: 0.15, value: "black" },
            x: 0,
            y: 1,
            b: 4,
            s: 0,
          },
          {
            color: { opacity: 0.15, value: "black" },
            x: 0,
            y: 4,
            b: 4,
            s: 0,
          },
        ],
        md: [
          {
            color: { opacity: 0.1, value: "black" },
            x: 0,
            y: 4,
            b: 8,
            s: 0,
          },
          {
            color: { opacity: 0.25, value: "black" },
            x: 0,
            y: 6,
            b: 12,
            s: 0,
          },
        ],
        lg: [
          {
            color: { opacity: 0.15, value: "black" },
            x: 0,
            y: 12,
            b: 12,
            s: 0,
          },
          {
            color: { opacity: 0.25, value: "black" },
            x: 0,
            y: 16,
            b: 32,
            s: 0,
          },
        ],
        "focus-ring": {
          color: "@global-alienblue",
          x: 0,
          y: 0,
          b: 0,
          s: 4,
        },
      },
      dark: {
        xs: {
          color: { opacity: 0.67, value: "black" },
          x: 0,
          y: 1,
          b: 2,
          s: 0,
        },
        sm: [
          {
            color: { opacity: 0.33, value: "black" },
            x: 0,
            y: 1,
            b: 4,
            s: 0,
          },
          {
            color: { opacity: 0.33, value: "black" },
            x: 0,
            y: 4,
            b: 4,
            s: 0,
          },
        ],
        md: [
          {
            color: { opacity: 0.2, value: "black" },
            x: 0,
            y: 4,
            b: 8,
            s: 0,
          },
          {
            color: { opacity: 0.5, value: "black" },
            x: 0,
            y: 6,
            b: 12,
            s: 0,
          },
        ],
        lg: [
          {
            color: { opacity: 0.2, value: "black" },
            x: 0,
            y: 12,
            b: 12,
            s: 0,
          },
          {
            color: { opacity: 0.5, value: "black" },
            x: 0,
            y: 16,
            b: 32,
            s: 0,
          },
        ],
      },
    },
  },
};

export default tokens;