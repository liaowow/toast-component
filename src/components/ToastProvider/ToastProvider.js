import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToast);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
