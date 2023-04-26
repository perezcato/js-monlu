import React from "react";
import { BsChevronRight } from "react-icons/bs";

type detailProps = {
  handleClick: () => void;
};
const DetailsFooter = (props: detailProps) => {
  const nextPage = props.handleClick;
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={nextPage}
          className="flex items-center p-3 text-[#fff] bg-[#377dff] hover:bg-[#2c64cc] rounded mr-10"
        >
          Next
          <BsChevronRight className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default DetailsFooter;
