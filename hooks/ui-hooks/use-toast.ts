import { ToastArgument, useAddToastAction } from "@/store/toast-store";

const useToast = () => {
  const addToast = useAddToastAction();
  const toast = (toastObject: ToastArgument) => addToast(toastObject);
  return toast;
};

export default useToast;
