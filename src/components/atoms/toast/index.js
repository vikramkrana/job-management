import toast from "react-hot-toast";

export const Toast = (message, type) => {
  switch (type) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "loading":
      return toast.loading(message);
    case "dismiss":
      return toast.dismiss();
    case "remove":
      return toast.remove();
    default:
      return toast(message);
  }
};
