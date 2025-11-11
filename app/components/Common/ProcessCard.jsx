import React from "react";

export const ProcessCard = ({ cardIcon, title, paragraph, numbering }) => {
  return (
    <div className="w-[312px] h-[384px] p-[32px] flex flex-col gap-[48px] items-center bg-white rounded-[16px]">
      <h2 className="text-[60px] font-bold text-[rgba(46,125,50,0.8)] opacity-[0.2] text-center">
        {numbering}
      </h2>

      <div className="text-4xl text-center">{cardIcon}</div>

      <div className="textBox flex flex-col gap-4 text-center">
        <h3 className="text-[20px] font-semibold">{title}</h3>
        <p className="text-[16px]">{paragraph}</p>
      </div>
    </div>
  );
};
