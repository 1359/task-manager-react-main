import { useTheme } from "../contexts/ThemeContext";

function StatCard({ value, color, name }) {
  const { isDarkMode } = useTheme();
  return (
    <div
      style={{
        padding: "15px",
        background: isDarkMode ? "#333" : "#fff",
        borderRadius: "10px",
        textAlign: "center",
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: `${color}`,
          marginBottom: "5px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          color: `${color}`,
          marginBottom: "5px",
        }}
      >
        {name}
      </div>
    </div>
  );
}
export default StatCard;
