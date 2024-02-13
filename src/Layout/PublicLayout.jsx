import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PartnersSection from "../components/LandingPage/PartnersSection";

const PublicLayout = (props) => {
  const { renderHeaderFooter, children } = props;
  return (
    <>
      { <Header />}
      <main className="flex-grow-1">{children}</main>
      {renderHeaderFooter && <PartnersSection />}
      {renderHeaderFooter && <Footer />}
    </>
  );
};

export default PublicLayout;
