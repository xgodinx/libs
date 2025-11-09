import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIdleTimer } from "react-idle-timer";
import { FaBell, FaSignOutAlt } from "react-icons/fa";

function App() {
  const idleTimerRef = useRef(null);

  const showNotification = () => {
    toast.success("notification", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const onIdle = () => {
    toast.warning("no activity for 5 seconds", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => {
      toast.error("You were kicked", {
        position: "top-right",
        autoClose: 4000,
      });
    }, 5000);
  };

  useIdleTimer({
    ref: idleTimerRef,
    timeout: 10000,
    onIdle,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <h1>Libraries</h1>

        <button
          onClick={showNotification}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <FaBell style={{ marginRight: "8px" }} />
          Show notification
        </button>

        <div style={{ marginTop: "30px", fontSize: "24px", color: "#f44336" }}>
          <FaSignOutAlt /> 5 seconds without activity - kick
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
