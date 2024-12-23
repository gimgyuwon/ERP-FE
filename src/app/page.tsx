"use client";

import SideBar from "@/components/main/SideBar";
import TimeTable from "@/components/main/TimeTable";
import UserReservationInfo from "@/components/main/UserReservationInfo";
import NextReservation from "@/components/main/NextReservation";
import { useState } from "react";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="flex gap-4 justify-center align-middle h-screen">
      <div className="flex-[2_0_0] max-w-96">
        <SideBar />
      </div>
      <div className="flex-[9_0_0]">
        <TimeTable setSelectedEvent={setSelectedEvent} />
      </div>
      <div className="flex-[4_0_0] max-w-96 flex-col">
        <NextReservation />
        <UserReservationInfo event={selectedEvent} />
      </div>
    </div>
  );
}
