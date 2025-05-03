"use client";

import React from "react";

import { twMerge } from "tailwind-merge";

export default function Button({
  title = "Full Stack",
  className = "",
  iconProp = <></>,
  size = "md",
  onClick = () => {},
  isDisabled = false,
}: {
  title?: string;
  className?: string;
  iconProp?: JSX.Element;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  isDisabled?: boolean;
}) {
  const _size = {
    sm: "py-2 px-3 text-sm",
    md: "py-2 px-4 text-md",
    lg: "py-4 px-5 text-lg",
  }[size];

  return (
    <div
      onClick={onClick}
      className={twMerge(
        "font-bold flex flex-row items-center justify-center gap-2 border rounded size-fit",
        isDisabled
          ? "opacity-25 cursor-not-allowed border-white text-black"
          : "border-gray-500 text-black-500 hover:bg-white hover:text-black cursor-pointer",
        _size,
        className
      )}
    >
      {React.cloneElement(iconProp, {
        className: twMerge(
          iconProp.props.className,
          "w-5 h-5 mr-1 hover:text-black"
        ),
      }) || <></>}
      {title}
    </div>
  );
}
