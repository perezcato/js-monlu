import React from 'react';

interface ButtonProps{
    type:  "button" | "submit" | "reset" | undefined
    name: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    className: string
}

const handleModel = ()=>{}
const Button = (props: Partial<ButtonProps>) => {
    return (
        <>
           <button type={props.type} onClick={props.onClick} className={props.className}>{props.name}</button>
        </>
    );
};


export default Button;