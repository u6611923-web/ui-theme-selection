import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const defaultSettings = {
  theme: "light",
  language: "en",
};

export const useSettings = () => {
  return useContext(SettingsContext);
};

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("app-settings");

    if (savedSettings) {
      return JSON.parse(savedSettings);
    }

    return defaultSettings;
  });

  const setTheme = (theme) => {
    setSettings((previousSettings) => ({
      ...previousSettings,
      theme,
    }));
  };

  const setLanguage = (language) => {
    setSettings((previousSettings) => ({
      ...previousSettings,
      language,
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        language: settings.language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}