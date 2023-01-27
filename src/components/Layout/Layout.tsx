import React from "react";
import { LayoutInterface } from "../interfaces";

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="w-full h-screen m-0 p-0 flex flex-col">{children}</div>
  );
};

export default Layout;
