"use client";

import React from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./titlebar.css";

const Titlebar: React.FC = () => {
  const appWindow = getCurrentWindow();

  const handleMinimize = () => appWindow.minimize();
  const handleMaximize = () => appWindow.toggleMaximize();
  const handleClose = () => appWindow.close();

  return (
    <div data-tauri-drag-region className="titlebar">
      <div
        className="titlebar-button"
        id="titlebar-minimize"
        onClick={handleMinimize}
      >
        <img
          src="https://api.iconify.design/mdi:window-minimize.svg"
          alt="minimize"
        />
      </div>
      <div
        className="titlebar-button"
        id="titlebar-maximize"
        onClick={handleMaximize}
      >
        <img
          src="https://api.iconify.design/mdi:window-maximize.svg"
          alt="maximize"
        />
      </div>
      <div
        className="titlebar-button"
        id="titlebar-close"
        onClick={handleClose}
      >
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  );
};

export default Titlebar;
