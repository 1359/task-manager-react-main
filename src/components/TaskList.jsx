import { useState, useMemo } from "react";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { useTheme } from "../contexts/ThemeContext";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  checkAdmin,
  searchTerm,
}) {
  const [filter, setFilter] = useState("all");
  const { isDarkMode } = useTheme();

  const filteredTasks = useMemo(() => {
    let filtered;

    switch (filter) {
      case "active":
        filtered = tasks.filter((task) => !task.completed);
        break;
      case "completed":
        filtered = tasks.filter((task) => task.completed);
        break;
      default:
        filtered = tasks;
    }

    if (!checkAdmin) {
      filtered = filtered.filter((task) => task.priority !== "high");
    }

    return filtered;
  }, [tasks, filter, checkAdmin]);

  const stats = useMemo(
    () => ({
      total: tasks.length,
      active: tasks.filter((t) => !t.completed).length,
      completed: tasks.filter((t) => t.completed).length,
    }),
    [tasks]
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          padding: "15px",
          background: isDarkMode ? "#2c2c2c" : "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <TaskFilter
          value={stats.total}
          name={"all"}
          filter={filter}
          onClick={() => setFilter("all")}
        />

        <TaskFilter
          value={stats.active}
          color="#2196f3"
          name={"active"}
          filter={filter}
          onClick={() => setFilter("active")}
        />
        <TaskFilter
          value={stats.completed}
          color="#4caf50"
          name={"completed"}
          filter={filter}
          onClick={() => setFilter("completed")}
        />
      </div>

      {filteredTasks.length === 0 ? (
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            color: isDarkMode ? "#999" : "#666",
            fontSize: "18px",
          }}
        >
          {searchTerm
            ? `No results found for "${searchTerm}"`
            : filter === "all"
            ? "No tasks yet. Add your first task above!"
            : `No ${filter} tasks.`}
        </div>
      ) : (
        <div>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
              checkAdmin={checkAdmin}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
