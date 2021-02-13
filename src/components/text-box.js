import React from "react";

const TextBoxTitle = ({ children }) => (
  <h3 className="font-bold text-xl md:text-sm lg:text-xl text-grey-800 text-center uppercase bg-white pt-2 bg-opacity-0 relative z-20">
    <span className="inline-block border-b-4 border-red-500 pb-2 px-3">
      {children}
    </span>
  </h3>
);

const TextBoxBody = ({ children, noHeader }) => {
  const marginTop = noHeader ? 0 : -1;
  return (
    <div
      className="bg-white border-gray-400 border relative z-10 
            w-full"
      style={{ marginTop }}
    >
      {children}
    </div>
  );
};

const TextBoxPadder = ({ children }) => (
  <div className="w-4/5 mx-auto flex flex-col items-center justify-center py-5">
    {children}
  </div>
);

const TextBox = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-gray-900 w-full mb-5">
      {children}
    </div>
  );
};

export { TextBoxTitle, TextBoxBody, TextBoxPadder };

export default TextBox;
