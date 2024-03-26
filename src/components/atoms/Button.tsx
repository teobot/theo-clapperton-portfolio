"use client";

export default function Button({
  title = "Full Stack",
  outline = true,
  selectable = false,
  className = "",
  iconProp = <></>,
  size = "md",
  fill = "",
  pointer = "",
  onClick = () => {},
  disabled = false,
}: {
  title?: string;
  outline?: boolean;
  selectable?: boolean;
  className?: string;
  iconProp?: JSX.Element;
  size?: "sm" | "md" | "lg";
  fill?: string;
  pointer?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const border = selectable
    ? "border-white"
    : "border-gray-500 border-opacity-50";

  const textColor = selectable ? "text-white" : "text-gray-100 text-opacity-50";

  const _size = {
    sm: "",
    md: "",
    lg: "text-2xl font-bold",
  }[size];

  const _disabledCss = disabled ? "opacity-25 cursor-not-allowed" : "";

  return (
    <div
      onClick={onClick}
      className={`${fill} ${className} ${pointer} ${_disabledCss} flex flex-row items-center justify-center gap-2 border ${border} ${_size} ${textColor} p-3 px-5 rounded-md w-fit h-fit`}
    >
      {iconProp}
      {title}
    </div>
  );
}
