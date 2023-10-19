import React, { useState } from "react";
import { APP_COLOR_SCHEME } from "@config/color-scheme";

const DragIcon = () => {
  return (
    <div className="relative w-full aspect-square p-1">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={APP_COLOR_SCHEME["app-white-disable"]}
          d="M3,15V13H5V15H3M3,11V9H5V11H3M7,15V13H9V15H7M7,11V9H9V11H7M11,15V13H13V15H11M11,11V9H13V11H11M15,15V13H17V15H15M15,11V9H17V11H15M19,15V13H21V15H19M19,11V9H21V11H19Z"
        />
      </svg>
    </div>
  );
};

export default DragIcon;
