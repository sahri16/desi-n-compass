import React, { useState } from "react";
import { orderOnWhatsApp } from "../utils/whatsapp";

const WhatsAppButton = ({ item, categoryName }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => orderOnWhatsApp(item, categoryName)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: hovered
          ? "linear-gradient(135deg,#25D366,#128C7E)"
          : "rgba(37,211,102,0.1)",
        border: `1px solid ${
          hovered ? "#25D366" : "rgba(37,211,102,0.3)"
        }`,
        color: hovered ? "#fff" : "#25D366",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "1px",
        textTransform: "uppercase",
        padding: "6px 12px",
        borderRadius: 6,
        cursor: "pointer",
        transition: "all .25s",
        fontFamily: "'Inter', sans-serif",
        whiteSpace: "nowrap",
        boxShadow: hovered
          ? "0 4px 15px rgba(37,211,102,.3)"
          : "none",
      }}
    >
      <i className="fa-brands fa-whatsapp" style={{ fontSize: 13 }} />
      Order Now
    </button>
  );
};

export default WhatsAppButton;