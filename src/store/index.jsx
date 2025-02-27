import { create } from "zustand";

export const addModal = create((set) => ({
  showAddModal: false,
  openAddModal: () => set(() => ({ showAddModal: true })),
  closeAddModal: () => set(() => ({ showAddModal: false })),
}));

export const addTasks = create((set) => ({
  tasks: [
    { name: "Go for walk", isDone: true },
    { name: "Read a Book", isDone: true },
    { name: "Try a New Recipe", isDone: false },
    {
      name: "Practice Meditation or Mindfulness",
      isDone: false,
    },
  ],

  addNewTask: (obj) =>
    set((state) => ({
      tasks: [...state.tasks, obj],
    })),
}));
