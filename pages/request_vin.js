import React from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import HeaderDefault from "../components/shared/headers/HeaderDefault";
import FooterFullwidth from "../components/shared/footers/FooterFullwidth";
import HeaderMobile from "../components/shared/headers/HeaderMobile";
import NavigationList from "../components/shared/navigation/NavigationList";
import Request from "../components/RequestVin";
import { connect } from "react-redux";

const RequestVin = (props) => {
  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />

      <main id="homepage-1">
        <Request />
      </main>
      <FooterFullwidth />
    </div>
  );
};

function mapStateToProps(state) {
  return state.lang.langData.register_page;
}

export default connect(mapStateToProps)(RequestVin);
