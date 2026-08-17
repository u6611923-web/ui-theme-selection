import { useSettings } from "../context/SettingsContext";

function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div className="preview-card">
      <h2>{language === "en" ? "Preview" : "ตัวอย่าง"}</h2>

      <p>
        {language === "en" ? "Current Theme" : "ธีมปัจจุบัน"}: {theme}
      </p>

      <p>
        {language === "en" ? "Current Language" : "ภาษาปัจจุบัน"}: {language}
      </p>

      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}

export default PreviewCard;