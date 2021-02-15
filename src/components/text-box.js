import React from "react";

const TextBoxContext = React.createContext();

const useTextBoxContext = () => {
  const context = React.useContext(TextBoxContext);
  if (!context) {
    throw new Error(
      `TextBox compound components cannot be rendered outside the TextBox component.`
    );
  }
  return context;
};

const TextBoxTitle = ({ children }) => (
  <h3 className="font-bold text-xl md:text-sm lg:text-xl text-grey-800 text-center uppercase bg-white pt-2 bg-opacity-0 relative z-20">
    <span className="inline-block border-b-4 border-red-500 pb-2 px-3">
      {children}
    </span>
  </h3>
);

const TextBoxBody = ({ children }) => {
  const context = useTextBoxContext();
  const marginTop = context.hasTitle ? -4 : 0;
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
  let hasTitle = false;

  if (typeof children.length !== "undefined") {
    children.forEach((child) => {
      if ("type" in child) {
        if (typeof child.type === "function") {
          if (child.type.name === "TextBoxTitle") {
            hasTitle = true;
          }
        }
      }
    });
  } else {
    if ("type" in children) {
      if ("name" in children.type) {
        if (children.type.name === "TextBoxTitle") {
          hasTitle = true;
        }
      }
    }
  }

  return (
    <TextBoxContext.Provider value={{ hasTitle }}>
      <div className="flex flex-col items-center text-gray-900 w-full mb-5">
        {children}
      </div>
    </TextBoxContext.Provider>
  );
};

TextBox.Title = TextBoxTitle;
TextBox.Body = TextBoxBody;
TextBox.Padder = TextBoxPadder;

export default TextBox;
