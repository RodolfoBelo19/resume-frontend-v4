"use client";

import React from "react";
import { Dock } from "../../dock";
import { AboutMe } from "../../about-me";
import { CareerInfo } from "../../career";

export default function HomePage() {
  const [showContainer, setShowContainer] = React.useState("");

  const containers: any = {
    career: <CareerInfo />,
    "about-me": <AboutMe />,
    linkedin: true,
    github: true,
    "contact-me": true,
  };
  const container = containers[showContainer];

  return (
    <div className="p-5 space-y-5">
      {!container && (
        <section className="p-5 mt-32 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center">
            <div className="p-1 rounded-full box-gradient-border">
              <img src="profile.jpeg" className="w-56 rounded-full" />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <img src="hand-gif.gif" className="sm:w-24 w-12 rounded-full" />
              <h1 className="sm:text-5xl text-2xl font-bold text-white">
                Hey, I'm{" "}
                <span className="font-bold box-gradient-title">
                  Rodolfo Belo
                </span>
                !
              </h1>
            </div>
            <h3 className="sm:text-xl text-md text-center sm:w-4/12 text-white">
              I'm a full-stack developer with a passion for creating beautiful
              and functional applications.
            </h3>
          </div>
        </section>
      )}

      {container}

      <Dock setIsOpen={setShowContainer} isOpen={showContainer} />
    </div>
  );
}
