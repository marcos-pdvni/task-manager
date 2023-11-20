import ThemeProvider from "./ThemeContext";
import NotificationProvider from "./NotificationContext";
import TaskProvider from "./TaskContext";

export default function ContextProvider({ children }) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <TaskProvider>{children}</TaskProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}
