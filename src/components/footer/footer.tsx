import React, { ReactNode } from "react";

export type FooterProps = {
  children: ReactNode;
  rounded?: boolean;
  className?: string;
}

const Footer = ({ children, className, rounded = false }: FooterProps) => {

    const _className = (() => {
        let classNames = 'fixed bottom-0 left-0 w-full bg-black opacity-50 text-white flex justify-center items-center p-6 shadow-lg z-50 ';
        classNames += `${rounded ? 'rounded-t-[50px]' : ''} `;
        classNames += className;
        return classNames;
    })

    return (
        <div className={_className()}>
            {children}
        </div>
    );
};

export default Footer;
