import React from "react";
import Table from "../../ui/Table";

const storeColumns = [
  { name: "구분1", width: "15%" },
  { name: "구분2", width: "15%" },
  { name: "구분3", width: "15%" },
  { name: "이용권명", width: "40%" },
  { name: "금액", width: "15%" },
];

const storeData = [
  {
    구분1: "1종",
    구분2: "시간제",
    구분3: "취득",
    이용권명: "이용권1",
    금액: "235,000",
  },
  {
    구분1: "1종",
    구분2: "기간제",
    구분3: "일반",
    이용권명: "이용권2",
    금액: "235,000",
  },
  {
    구분1: "1종",
    구분2: "시간제",
    구분3: "취득",
    이용권명: "이용권3",
    금액: "235,000",
  },
  {
    구분1: "1종",
    구분2: "시간제",
    구분3: "일반",
    이용권명: "이용권4",
    금액: "235,000",
  },
  {
    구분1: "2종",
    구분2: "기간제",
    구분3: "일반",
    이용권명: "이용권5",
    금액: "235,000",
  },
  {
    구분1: "1종",
    구분2: "기간제",
    구분3: "장롱",
    이용권명: "이용권6",
    금액: "235,000",
  },
  {
    구분1: "2종",
    구분2: "시간제",
    구분3: "취득",
    이용권명: "이용권7",
    금액: "235,000",
  },
  {
    구분1: "1종",
    구분2: "시간제",
    구분3: "장롱",
    이용권명: "이용권8",
    금액: "235,000",
  },
  {
    구분1: "2종",
    구분2: "기간제",
    구분3: "장롱",
    이용권명: "이용권9",
    금액: "235,000",
  },
  {
    구분1: "2종",
    구분2: "기간제",
    구분3: "취득",
    이용권명: "이용권10",
    금액: "235,000",
  },
];

const MainTable: React.FC = ({}) => {
  return (
    <div className="flex w-full max-w-6xl min-h-screen">
      <div className="w-full ">
        <Table columns={storeColumns} data={storeData} selectable />
      </div>
    </div>
  );
};

export default MainTable;
