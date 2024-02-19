import React from "react";
import DashboardRow from "./DashboardRow";

export default function DashboardRecords({ isHeader }) {
  return isHeader ? (
    <thead>
      <tr>
        <th scope="col" colSpan={2}>
          Hash
        </th>
        <th scope="col">Date</th>
        <th scope="col">Location(Gratitude, Longitude)</th>
        <th scope="col">Category</th>
        <th scope="col">Crime existence</th>
      </tr>
    </thead>
  ) : (
    <tbody>
      <DashboardRow
        hash={
          "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"
        }
        date={"2024-01-02"}
        location={"Los Angeles"}
        category={"Robbery"}
        existence={"True"}
      ></DashboardRow>
    </tbody>
  );
}
