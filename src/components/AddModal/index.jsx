import { useRef } from "react";
import { addModal, addTasks } from "../../store";
import styles from "./index.module.css";
export default function AddModal() {
  const { closeAddModal } = addModal();
  const { addNewTask } = addTasks();

  const taskInput = useRef();
  const handelAddModal = (e) => {
    e.preventDefault();
    let newTask = { name: taskInput.current.value };
    addNewTask(newTask);
    closeAddModal();
  };

  return (
    <div onClick={closeAddModal} className={styles.modal}>
      <form
        onSubmit={handelAddModal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="d-flex flex-column gap-3">
          <label>Task New Task</label>
          <input ref={taskInput} type="text" placeholder="Type new task here" />
        </div>

        <div className={styles.btns}>
          <button onClick={closeAddModal}>Cancel</button>
          <button style={{ backgroundColor: "#00B4D8", color: "#fff" }}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
