import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import s from "./Layout.module.scss";
import MobileMenu from "./Header/NavMenu/MobileMenu";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <MobileMenu />
      <main className={`${s.content} container`}>{children}</main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
