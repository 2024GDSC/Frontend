import React from "react";

export default function DashboardRow({
  hash,
  date,
  location,
  category,
  existence,
}) {
  return (
    <tr>
      <td colSpan={2}>{hash}</td>
      <td>{date}</td>
      <td>{location}</td>
      <td>{category}</td>
      <td>{existence}</td>
    </tr>
  );
}
