import React from "react";

import HeaderDefault from "../../components/shared/headers/HeaderDefault";
import FooterFullwidth from "../../components/shared/footers/FooterFullwidth";
import HeaderMobile from "../../components/shared/headers/HeaderMobile";
import NavigationList from "../../components/shared/navigation/NavigationList";

import FAQ from "../../components/partials/page/FAQ";

const Warranty = () => (
  <div className="site-content">
    <HeaderDefault />
    <HeaderMobile />
    <NavigationList />

    <main id="homepage-1">
      <FAQ />
    </main>
    <FooterFullwidth />
  </div>
);

export default Warranty;