import AllTasks from "./components/AllTasks";
import TasksFilter from "./components/TasksFilter";

export default function App() {
  return (
    <div className="App d-flex flex-wrap">
      <TasksFilter />
      <AllTasks />
    </div>
  );
}
