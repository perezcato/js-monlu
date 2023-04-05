import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const AddProject = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`${
          showModal ? "" : "hidden"
        } bg-white  w-[50%]  p-[60px] border flex gap-2.5 z-0 flex-col absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-xl`}
      >
        <Button
          name="&times;"
          className="absolute top-[1px] right-[12px] text-[50px]  cursor-pointer text-[#333]"
          onClick={closeModel}
        />
        <Input
          label="Project Name"
          className="border border-black outline-none rounded px-3 py-1"
        />
        <p>Billing Months</p>
        <Input
          label="from"
          className="border border-black outline-none rounded px-3 py-1"
        />
        <Input
          label="to"
          className="border border-black outline-none rounded px-3 py-1"
        />
        <label htmlFor="bill">Bill Maturity</label>
        <select id="bill" className="border border-black py-1 rounded">
          <option disabled>choose</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div
        className={`${
          showModal ? "" : "hidden"
        } h-screen w-screen absolute top-0 left-0 -z-10 bg-black/[0.6] backdrop-blur-sm`}
      ></div>
    </>
  );
};

export default AddProject;
