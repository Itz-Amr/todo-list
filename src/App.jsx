import AllTasks from "./AllTasks";
import TasksFilter from "./TasksFilter";

export default function App() {
  return (
    <div className="App d-flex flex-wrap">
      <TasksFilter />
      <AllTasks />
    </div>
  );
}
