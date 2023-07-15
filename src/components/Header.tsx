import React from "react";

import styles from "../styles/Home.module.css";

type HeaderProps = {
  children: React.ReactNode;
  bgFrom?: string;
  bgTo?: string;
};

export default function Header({
  children,
  bgFrom = "#74EBD5",
  bgTo = "#9FACE6",
}: HeaderProps) {
  return (
    <>
      <div className={[styles.header, "mb-2 mt-2"].join(" ")}>{children}</div>
      <div
        className="w-100"
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        }}
      />
    </>
  );
}
