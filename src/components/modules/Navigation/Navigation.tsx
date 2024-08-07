"use client";

import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
// import { Footer } from "./Footer";

export const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <Header>
      {children}
      {/* <Footer /> */}
    </Header>
  );
};
