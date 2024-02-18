import React from "react";

export default function DashboardRow({ hash, text, start, end, date }) {
  return (
    <tr>
      <td colSpan={2}>{hash}</td>
      <td>{text}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>{date}</td>
    </tr>
  );
}
