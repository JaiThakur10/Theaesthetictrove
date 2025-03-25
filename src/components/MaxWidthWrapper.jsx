import React from "react";

const MaxWidthWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
