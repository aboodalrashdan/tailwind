import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="w-full mx-auto px-4 max-w-screen-xl">{children}</div>;
};
