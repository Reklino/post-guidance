const selectStyles = {
  placeholder: (provided, state) => {
    return {
      ...provided,
      fontSize: "var(--regular-font-size)",
    };
  },
  input: (provided, state) => {
    return {
      ...provided,
      fontSize: "var(--regular-font-size)",
    };
  },
  multiValue: (provided, state) => {
    return {
      ...provided,
      fontSize: "var(--medium-font-size)",
      backgroundColor: "var(--secondary-background-selected)",
    };
  },
  multiValueRemove: (provided, state) => {
    return {
      ...provided,
      position: "relative",
      zIndex: 20,
      cursor: "pointer",
      ":hover": {
        backgroundColor: "var(--secondary-background-selected)",
        color: "rgba(255,255,255,0.5)",
      },
    };
  },
  singleValue: (provided, state) => {
    return {
      ...provided,
      fontSize: "var(--medium-font-size)",
    };
  },
  option: (provided, state) => {
    console.log(provided);
    return {
      ...provided,
      fontSize: "var(--medium-font-size)",
      padding: "var(--base)",
      display: "flex",
    };
  },
};

const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 4,
  colors: {
    ...theme.colors,
    neutral0: "var(--secondary-background)",
    neutral5: "blue",
    neutral10: "blue",
    neutral20: "var(--secondary-background)",
    neutral30: "var(--secondary-background)",
    neutral40: "blue",
    neutral50: "var(--neutral-content-weak)",
    neutral60: "red",
    neutral70: "red",
    neutral80: "var(--neutral-content-strong)",
    neutral90: "red",
    primary25: "red",
  },
});

export { selectTheme, selectStyles };
