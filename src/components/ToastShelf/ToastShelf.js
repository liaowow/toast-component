import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            id={toast.id}
            handleDismiss={handleDismiss}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
