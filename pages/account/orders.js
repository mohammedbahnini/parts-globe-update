import React from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Orders from '../../components/partials/account/Orders';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';

const OrdersPage = (props) => {

    const { breadcrumb, orders } = props;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadcrumb} />
                <Orders orders={orders} />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};


export async function getServerSideProps(ctx) {

    // getting client id 
    const clientID = ctx.req.session.client_id;
    const response = await axios.get(`${process.env.API}/order/get/${clientID}`);
    //console.log(response.data);
    return { props: { orders: response.data } };
}

function mapStateToProps(state) {
    return {
        breadcrumb: state.lang.langData.orders_page.breadcrumb
    }
}

export default connect(mapStateToProps)(OrdersPage);
