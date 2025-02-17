import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="relative flex h-[11px] w-[11px]">
          {/* Outer Ping Animation */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
          {/* Inner Static Circle */}
          <span className="relative inline-flex h-[11px] w-[11px] rounded-full bg-red-600"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
