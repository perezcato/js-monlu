import React from "react";
import Image from "next/image";
import successImage from "../utility/assests/oc-hi-five.svg";

const ProjectSuccess = () => {
  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <div className="">
        <Image
          src={successImage}
          alt="A hi five between two people"
          width={240}
        />
      </div>
      <div className="mt-5 text-center">
        <h2 className="font-bold text-[1.3rem] text-[#1e2022]">Successful!</h2>
        <p className="text-[rgba(19,33,68,.5)]">
          New project has been successfully created.
        </p>
      </div>
    </div>
  );
};

export default ProjectSuccess;
