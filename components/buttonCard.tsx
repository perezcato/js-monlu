import React from "react";

type buttonCardProps = {
  cancelBtnText: string;
  saveBtnText: string;
  onClick?: () => void;
};
const ButtonCard = (props: buttonCardProps) => {
  const { saveBtnText, cancelBtnText, onClick } = props;
  return (
    <>
      <div className="px-[2.5rem] py-[1.3rem] flex justify-end gap-3 mt-3 border-t border-t-[rgba(231,234,243,0.7]">
        <button className="border border-[rgba(231,234,243,.7)] px-4 py-2 text-[#677788] capitalize hover:shadow-md hover:shadow-[rgba(140,152,164,.25)] hover:bg-white hover:text-[#1366ff] rounded-md">
          {cancelBtnText}
        </button>
        <button className="bg-[#377dff] border border-[rgba(231,234,243,.7)] px-4 py-2 text-white hover:shadow-md capitalize hover:shadow-[rgba(55,125,255,.35)] hover:bg-[#2f6ad9] rounded-md">
          {saveBtnText}
        </button>
      </div>
    </>
  );
};

export default ButtonCard;
