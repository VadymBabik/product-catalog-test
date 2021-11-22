import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={`${s.content} container`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
