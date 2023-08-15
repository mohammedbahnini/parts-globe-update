import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Checkout from '../../components/partials/account/Checkout';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';

const OrderTrackingPage = (props) => {
    const { breadcrumb } = props;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadcrumb} />
                <Checkout />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        breadcrumb: state.lang.langData.payment_page.breadcrumb
    }
}

export default connect(mapStateToProps)(OrderTrackingPage);
