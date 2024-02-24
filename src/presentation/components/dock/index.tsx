import "./style.css";
import React from "react";

type DockProps = {
  isOpen: string;
  setIsOpen: (value: string) => void;
};
export const Dock = ({ setIsOpen, isOpen }: DockProps) => {
  return (
    <div className="dock">
      <ul>
        <li id="career">
          <a href="#career">
            <em>
              <span>Career</span>
            </em>
            <div
              onClick={() =>
                setIsOpen(!isOpen || isOpen === "about-me" ? "career" : "")
              }
            >
              <img src="/career.png" />
            </div>
          </a>
        </li>
        <li id="about-me">
          <a href="#about-me">
            <em>
              <span>About me</span>
            </em>
            <div className="py-3">
              <div
                onClick={() =>
                  setIsOpen(!isOpen || isOpen === "career" ? "about-me" : "")
                }
              >
                <img src="/business-man.png" />
              </div>
            </div>
          </a>
        </li>
        <li id="linkedin">
          <a href="#linkedin">
            <em>
              <span>LinkedIn</span>
            </em>
            <img src="/linkedin.png" />
          </a>
        </li>
        <li id="github">
          <a href="#github">
            <em>
              <span>Github</span>
            </em>
            <div className="py-1">
              <img src="/github.png" />
            </div>
          </a>
        </li>
        <li id="contact-me">
          <a href="#contact-me">
            <em>
              <span>Contact me</span>
            </em>
            <img src="/mail.png" />
          </a>
        </li>
      </ul>
    </div>
  );
};
