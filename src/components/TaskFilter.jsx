import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
function TaskFilter({ value, color = "#4caf50", name, filter, onClick }) {
  const { isDarkMode } = useTheme();
  useEffect(() => {
    console.log("nameeee:", name);
    console.log("filterrrrr:", filter);
  }, [name, filter]);

  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        background: filter === name ? color : isDarkMode ? "#333" : "#ddd",
        color: filter === name ? "white" : isDarkMode ? "#fff" : "#000",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: filter === name ? "bold" : "normal",
      }}
    >
      {name} ({value})
    </button>
  );
}
export default TaskFilter;
