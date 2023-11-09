import React from "react";

export default function BlackButton({ title, width }) {
  return (
    <div
      className={`text-white flex justify-center items-center text-[14px] bg-black rounded-[10px] w-[90%] h-[55px]`}
    >
      {title}
    </div>
  );
}
