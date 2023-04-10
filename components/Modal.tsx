import React, { useState } from "react";
import Input from "@/components/Input";

import Button from "@/components/Button";

import { AnimatePresence, motion } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProject = (props: Props) => {
  const closeModel = () => props.setShowModal(false);

  return (
    <AnimatePresence>
      {props.showModal && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                duration: 0.1,
                ease: "easeOut",
              },
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              opacity: {
                ease: "easeIn",
                duration: 0.2,
              },
            },
          }}
          onClick={closeModel}
          className={`min-h-screen min-w-screen absolute z-10 flex justify-center inset-0 bg-black/[0.6] backdrop-blur-sm`}
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`bg-white w-3/12 mx-auto  mt-20 p-10 border flex flex-col absolute rounded space-y-2`}
          >
            <XCircleIcon
              onClick={closeModel}
              className="absolute inline-block w-8 h-8 text-gray-600 right-10 top-5 cursor-pointer"
            />
            <Input label="Project Name" />
            <Input label="Billing Month From" />
            <Input label="Billing Month To" />
            <div>
              <label htmlFor="bill" className="text-sm font-semibold">
                Bill Maturity
              </label>
              <div className="mt-1 border rounded-md border-gray-300 overflow-hidden shadow-sm px-5 py-3 ">
                <select id="bill" className="w-full outline-none">
                  <option disabled>choose</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};

export default AddProject;
