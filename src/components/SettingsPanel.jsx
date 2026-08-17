import { useSettings } from "../context/SettingsContext";

function SettingsPanel() {
  const {
    theme,
    language,
    setTheme,
    setLanguage,
    resetSettings,
  } = useSettings();

  return (
    <div className="settings-panel">
      <h2>{language === "en" ? "Settings" : "การตั้งค่า"}</h2>

      <div>
        <p>{language === "en" ? "Theme" : "ธีม"}</p>

        <button onClick={() => setTheme("light")}>
          Light
        </button>

        <button onClick={() => setTheme("dark")}>
          Dark
        </button>
      </div>

      <div>
        <p>{language === "en" ? "Language" : "ภาษา"}</p>

        <button onClick={() => setLanguage("en")}>
          EN
        </button>

        <button onClick={() => setLanguage("th")}>
          TH
        </button>
      </div>

      <button onClick={resetSettings}>
        {language === "en" ? "Reset Settings" : "รีเซ็ตการตั้งค่า"}
      </button>

      <p>Theme: {theme}</p>
    </div>
  );
}

export default SettingsPanel;