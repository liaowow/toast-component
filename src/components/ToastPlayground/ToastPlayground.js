import React, { useState } from "react";

import { ToastContext } from "../ToastProvider";
import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toasts, createToast } = React.useContext(ToastContext); 
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handlePopToastClick = (event) => {
    event.preventDefault();
    createToast(message, variant);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const handleDismiss = (id) => {
    // const nextToasts = toasts.filter(toast => toast.id !== id);

    // setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={handlePopToastClick}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  onChange={(event) => setVariant(event.target.value)}
                  checked={option === variant}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopToastClick}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
