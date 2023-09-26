import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ToastProp = "default" | "success" | "error";

export type ToastState = {
  id: number;
  content: string;
  visible?: boolean;
  type?: ToastProp;
};

export type ToastArgument = Pick<ToastState, "content" | "type">;

export type ToastStoreState = {
  toastList: ToastState[];
};

export type ToastAction = {
  addToast: (toastContent: ToastArgument) => void;
  deleteToast: (toastContent: ToastState) => void;
  shiftToast: () => void;
};

const toastCreator = (toast: ToastArgument) => {
  const toastObject: ToastState = {
    id: Number(new Date()),
    content: toast.content,
    type: toast.type ?? "default",
    visible: true,
  };
  return toastObject;
};

const useToastStore = create<ToastStoreState & ToastAction>()(
  devtools((set) => ({
    toastList: [],
    addToast: (toastContent) => {
      set((state) => {
        const toastObject = toastCreator(toastContent);
        return {
          toastList: [...state.toastList, toastObject],
        };
      });
    },
    deleteToast: (toastContent) => {
      set((state) => ({
        toastList: state.toastList.filter(
          (item) => item.id !== toastContent.id,
        ),
      }));
    },
    shiftToast: () => {
      set((state) => ({
        toastList: state.toastList.slice(1),
      }));
    },
  })),
);

export const useToastState = () => useToastStore((state) => state.toastList);
export const useAddToastAction = () => useToastStore((state) => state.addToast);
export const useShiftToastAction = () =>
  useToastStore((state) => state.shiftToast);
export const useDeleteToastAction = () =>
  useToastStore((state) => state.deleteToast);
