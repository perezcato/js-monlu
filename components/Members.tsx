import React from "react";
import { MembersData } from "@/utility/data";
import MembersItem from "@/components/MembersItem";
import { BsBell } from "react-icons/bs";

const Members = () => {
  return (
    <div className="p-10 w-full h-full">
      {MembersData.map((person, index) => (
        <MembersItem
          key={index}
          image={person.image}
          name={person.name}
          email={person.email}
        />
      ))}
    </div>
  );
};

export default Members;
