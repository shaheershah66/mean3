import React from "react";

export default function SliderBtn({ direction, onClick }) {
  const btnStyles = {
    customArrow: {
      backgroundColor: "black",
      color: "white",
      padding: "0",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: 1,
      position: "absolute",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "25px",
    },
    nextArrow: {
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    prevArrow: {
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };

  return (
    <div
      style={{
        ...btnStyles.customArrow,
        ...(direction === "next" ? btnStyles.nextArrow : btnStyles.prevArrow),
      }}
      onClick={onClick}
    >
      {direction === "next" ? ">" : "<"}
    </div>
  );
}
