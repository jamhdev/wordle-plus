import React from "react";

export default function AlertModal({ alertMessage }) {
  return (
    <>
      <div className="alert-modal">
        <div>{alertMessage}</div>
      </div>
    </>
  );
}
