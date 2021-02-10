import React from "react";
import IconMic from "./icon-mic";

const HeaderText = () => (
  <div className="header-text pb-5 md:pb-20 lg:pb-28 pt-20 mb-5 md:mb-20 px-5">
    <div className="grid grid-flow-col auto-cols-max mt-5 md:mt-24 lg:mt-15 xl:mt-52 mb-4">
      <div className="lg:pl-7">
        <IconMic />
      </div>
      <div className="ml-3 lg:ml-8">
        <h1 className="bg-gray-800 bg-opacity-60 px-2 md:px-4 py-1 md:py-2 text-white font-bold text-xl md:text-5xl md:mt-2 lg:text-6xl lg:mt-6 xl:text-7xl tracking-tight relative text-shadow-md">
          Lähetyksenseuranta podcast
        </h1>
      </div>
    </div>
    <p className="bg-gray-800 bg-opacity-60 px-2 md:px-4 py-1 md:py-2 lg:py-3 lg:px-4 md:inline text-white text-sm md:text-3xl lg:text-4xl lg:ml-8 xl:text-4xl text-shadow-md">
      Podcast‚ joka käsittelee lähetystyötä nykyajassa.
    </p>
  </div>
);

export default HeaderText;
