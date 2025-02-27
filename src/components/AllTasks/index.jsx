import { useState } from "react";
import styles from "./index.module.css";
import AddModal from "../AddModal";
import { addModal, addTasks } from "../../store";
export default function AllTasks() {
  const { tasks } = addTasks();

  const { showAddModal, openAddModal } = addModal();
  return (
    <div
      className="flex-grow-1 h-100 d-flex flex-column gap-3"
      id={styles.allTasks}
    >
      {showAddModal ? <AddModal /> : null}
      <div className="col-12 d-flex align-items-center justify-content-between">
        <h1>All</h1>

        <button onClick={openAddModal}>Add Task +</button>
      </div>

      {tasks.map((el, index) => {
        return (
          <div key={index} className={styles.containerTasks}>
            <div className="d-flex flex-column">
              <h5>{el.name}</h5>
              <p>{el.date}</p>
            </div>

            <span>x</span>

            <input
              type="checkbox"
              defaultChecked={el.isDone}
              style={{ transform: "scale(1.1)" }}
            />
          </div>
        );
      })}
    </div>
  );
}
