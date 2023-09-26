import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
export type ToastProp = "default" | "success" | "error";

export type ToastState = {
  id?: number;
  content: string;
  visible?: boolean;
  type?: ToastProp;
};

export type ToastStoreState = {
  toastList: ToastState[];
};

export type ToastAction = {
  actions: {
    showToast: () => void;
    deleteToast: () => void;
  };
};

const useToastStore = create<ToastStoreState & ToastAction>()(
  devtools(
    persist(
      immer((set) => ({
        toastList: [],
        actions: {
          showToast: () => set((state) => state),
          deleteToast: () => set((state) => state),
        },
      })),
      {
        name: "toastStore",
      },
    ),
  ),
);

export const useToastState = () => useToastStore((state) => state.toastList);
export const useToastAction = () => useToastStore((state) => state.actions);
