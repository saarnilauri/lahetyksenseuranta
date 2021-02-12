import React from "react";

const TextBox = ({ title, children, noPadding }) => {
  const widthClass = noPadding ? "w-full" : "w-4/5";
  return (
    <div className="flex flex-col items-center text-gray-900 w-full mb-5">
      <h3 className="font-bold text-xl md:text-sm lg:text-xl text-grey-800 text-center uppercase bg-white pt-2 bg-opacity-0 relative z-20">
        <span className="inline-block border-b-4 border-red-500 pb-2 px-3">
          {title}
        </span>
      </h3>
      <div
        className="bg-white border-gray-400 border py-5 px-5 md:px-2 lg:px-5 relative z-10 
            w-full"
        style={{ marginTop: -1 }}
      >
        <div
          className={`${widthClass} mx-auto flex flex-col items-center justify-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextBox;
