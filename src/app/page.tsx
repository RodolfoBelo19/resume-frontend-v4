import HomePage from "@/presentation/components/public-components/home-page";
import React from "react";

export default function Home() {
  return (
    <div className="box-gradient h-screen">
      <div className="bg-black/50 relative z-10 h-screen">
        <HomePage />
      </div>
    </div>
  );
}
