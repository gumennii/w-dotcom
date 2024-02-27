"use client";

import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Navigation = ({ children }: PropsWithChildren) => {
  return (
    <Header>
      {children}
      <Footer />
    </Header>
  );
};

export default Navigation;
