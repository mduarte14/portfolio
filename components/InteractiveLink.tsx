"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa";

interface InteractiveLinkProps {
  url: string;
}

const InteractiveLink: React.FC<InteractiveLinkProps> = ({ url }) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      onClick={() => openInNewTab(url)}
      className="flex justify-center items-center cursor-pointer"
    >
      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
        Check Live Site
      </p>
      <FaLocationArrow className="ms-3" color="#CBACF9" />
    </div>
  );
};

export default InteractiveLink;
