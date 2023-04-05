import React from 'react';

interface Props {
  header?: string,
  children: React.ReactNode | React.ReactNode[]
}


const Card = (props: Props) => {
  return (
    <div className="bg-white shadow border mt-5 p-4 space-y-5 rounded">
      {props.children}
    </div>
  );
};

export default Card;