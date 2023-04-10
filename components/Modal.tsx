import React, { useState } from "react";
import Input from "@/components/Input";

import Button from "@/components/Button";

import { AnimatePresence, motion } from "framer-motion";

import { useFormik } from "formik";

import { XCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProject = (props: Props) => {
  const closeModel = () => props.setShowModal(false);
  const formik = useFormik({
    initialValues: {
      projectName: "",
      from: "",
      to: "",
      bill: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            onClick={(e) => e.stopPropagation()}
            className={`bg-white w-3/12 mx-auto  mt-20 p-10 border flex flex-col absolute rounded space-y-2`}
          >
            <XCircleIcon
              onClick={closeModel}
              className="absolute inline-block w-8 h-8 text-gray-600 right-10 top-5 cursor-pointer"
            />
            <form
              action="#"
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-1"
            >
              <Input
                label="Project Name"
                name="projectName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.projectName}
              />
              <Input
                label="from"
                name="from"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.from}
              />
              <Input
                label="to"
                name="to"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.to}
              />
              <label htmlFor="bill" className="mt-1">
                Bill Maturity
              </label>
              <select
                id="bill"
                className="border border-black py-1 rounded inline-block"
                name="bill"
                onChange={formik.handleChange}
                value={formik.values.bill}
              >
                <option disabled>choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
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
