"use client";
import Header from "@/app/components/admin/Header";
import SideBar from "@/app/components/admin/SideBar";
import MainTable from "@/app/components/admin/institute/MainTable";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* 사이드바 */}
      <div className="flex-shrink-0">
        <SideBar />
      </div>

      {/* 오른쪽 메인 레이아웃 */}
      <div className="flex flex-col flex-1">
        {/* 헤더 (고정, 가로 전체) */}
        <Header />

        {/* 메인 콘텐츠 (가운데 정렬) */}
        <div className="flex flex-[8_0_0]  flex-col p-6">
          <div className="w-full max-w-8xl  bg-white p-10 pl-20 rounded-lg ">
            <h2 className="text-lg font-semibold mb-7">매장 조회</h2>
            <MainTable />
          </div>
        </div>
      </div>
    </div>
  );
}
