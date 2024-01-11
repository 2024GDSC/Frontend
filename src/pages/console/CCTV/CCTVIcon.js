import React from "react";
import { useDrag } from "react-dnd";

export default function CCTVIcon({ id }) {
  const [, drag] = useDrag({
    type: "CCTV",
    item: { id },
  });

  return (
    <div ref={drag} style={{ cursor: "move", marginBottom: "8px" }}>
      🎥 CCTV
    </div>
  );
}
