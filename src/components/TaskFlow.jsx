import { useTheme } from "../contexts/ThemeContext";
import StatCard from "./StatCard";
function TaskFlow({ tasks }) {
  console.log("tasksssss" + tasks.completed);

  const { isDarkMode } = useTheme();
  const complitedByPriority = {
    high: tasks.filter((task) => task.completed && task.priority == "high")
      .length,
    medium: tasks.filter((task) => task.completed && task.priority == "medium")
      .length,
    low: tasks.filter((task) => task.completed && task.priority == "low")
      .length,
  };
  const byPriority = {
    high: tasks.filter((task) => task.priority == "high").length,
    medium: tasks.filter((task) => task.priority == "medium").length,
    low: tasks.filter((task) => task.priority == "low").length,
  };
  const taskSummery = {
    completed: tasks.filter((task) => task.completed).length,
    active: tasks.filter((task) => !task.completed).length,
    all: tasks.length,
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1
        style={{
          color: isDarkMode ? "#fff" : "#2c2c2c",
        }}
      >
        TaskFlow
      </h1>
      <div
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "5px",
          marginLeft: "5px",
          marginRight: "10px",
          marginTop: "30px",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        }}
      >
        <StatCard value={byPriority.high} color={"#ff4444"} name={"high"} />
        <StatCard value={byPriority.medium} color={"#ffaa00"} name={"medium"} />
        <StatCard value={byPriority.low} color={"#44ff44"} name={"low"} />
      </div>
      <h1
        style={{
          color: isDarkMode ? "#fff" : "#2c2c2c",
        }}
      >
        TaskSummery
      </h1>
      <div
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "5px",
          marginLeft: "5px",
          marginRight: "10px",
          marginTop: "30px",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
        }}
      >
        <StatCard
          value={taskSummery.completed}
          color={"#ff4444"}
          name={"completed"}
        />
        <StatCard
          value={taskSummery.active}
          color={"#ffaa00"}
          name={"active"}
        />
        <StatCard value={taskSummery.all} color={"#44ff44"} name={"all"} />
      </div>
    </div>
  );
}
export default TaskFlow;
