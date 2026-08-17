import { useSettings } from "../context/SettingsContext.jsx";

function Header() {
  const { language } = useSettings();

  return (
    <header>
      <h1>
        {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
      </h1>
    </header>
  );
}

export default Header;