import React from "react";

const IconClock = ({small}) => {
  const dimensions = !small ? {height: 30, width: 30} : {height: 15, width: 15};

return(
  <svg
    height={dimensions.height}
    viewBox="0 0 30 30"
    width={dimensions.width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15 29c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14z"
      fill="#fff"
    />
    <path d="m15 0c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 2.857c-6.706 0-12.143 5.437-12.143 12.143s5.437 12.143 12.143 12.143 12.143-5.437 12.143-12.143-5.437-12.143-12.143-12.143z" />
    <path d="m15 4.996c.526 0 .952.426.952.952v9.052c0 .526-.426.952-.952.952s-.952-.426-.952-.952v-9.052c0-.526.426-.952.952-.952z" />
    <path d="m19.294 14.048c.526 0 .952.426.952.952s-.426.952-.952.952h-4.297c-.526 0-.952-.426-.952-.952s.426-.952.952-.952z" />
  </svg>
);
}

export default IconClock;
