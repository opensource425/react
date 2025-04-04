import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastHelper = (type, message, autoclose) => {
  const defaultAutoClose = 900;
  if (
    typeof type !== "string" &&
    typeof message !== "string" &&
    typeof autoclose !== "number"
  ) {
    return;
  }

  toast.dismiss();
  function runToast() {
    switch (type) {
      case "success":
        return toast.success(message, {
          autoClose: autoclose || defaultAutoClose,
          bodyClassName: "successToastBody",
          progressClassName: "successToastProgress",
        });
      case "error":
        return toast.error(message, {
          autoClose: autoclose || defaultAutoClose,
          bodyClassName: "font-color-black",
        });
      case "warning":
        return toast.warning(message, {
          autoClose: autoclose || defaultAutoClose,
        });
      case "info":
        return toast.info(message, {
          autoClose: autoclose || defaultAutoClose,
        });
      default:
        return toast(message, { autoClose: autoclose || defaultAutoClose });
    }
  }
  setTimeout(() => {
    runToast();
  }, 500);
};

export default ToastHelper;
