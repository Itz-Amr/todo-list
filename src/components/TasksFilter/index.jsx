import styles from "./index.module.css";
export default function TasksFilter() {
  return (
    <div className={styles.tasksFilter}>
      <p className={styles.active}>All</p>
      <p>To-Do</p>
      <p>Completed</p>
    </div>
  );
}
