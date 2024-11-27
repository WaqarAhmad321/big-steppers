"use client";

import { Share2 } from "lucide-react";
import React from "react";

const ShareButton = () => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
      }}
      className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors">
      <Share2 className="h-5 w-5" />
      <span>Share</span>
    </button>
  );
};

export default ShareButton;
