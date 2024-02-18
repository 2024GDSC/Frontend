import React from "react";
import Wrapper from "../../UI/Wrapper";
import DashboardRecords from "./DashboardRecords";

export default function DashboardTable() {
  return (
    <Wrapper>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <DashboardRecords isHeader={true}></DashboardRecords>
          <DashboardRecords isHeader={false}></DashboardRecords>
        </table>
      </div>
    </Wrapper>
  );
}
