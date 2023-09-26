import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ToastProp = "default" | "success" | "error";

export type ToastState = {
  id: number;
  title?: string;
  content: string;
  visible?: boolean;
  type?: ToastProp;
};

export type ToastArgument = Pick<ToastState, "title" | "content" | "type">;

export type ToastStoreState = {
  toastList: ToastState[];
};

export type ToastAction = {
  addToast: (toastContent: ToastArgument) => void;
  deleteToast: (toastContent: ToastState) => void;
};

const toastCreator = (toast: ToastArgument) => {
  const toastObject: ToastState = {
    id: Number(new Date()),
    title: toast.title ?? undefined,
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
        if (state.toastList.length > 0) {
          return {
            toastList: [...state.toastList],
          };
        }
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
  })),
);

export const useToastState = () => useToastStore((state) => state.toastList);
export const useAddToastAction = () => useToastStore((state) => state.addToast);
export const useDeleteToastAction = () =>
  useToastStore((state) => state.deleteToast);
