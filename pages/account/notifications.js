import React from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Notifications from '../../components/partials/account/Notifications';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import axios from 'axios';
import { connect } from 'react-redux';

const AccountNotificationsPage = (props) => {

    const { breadcrumb, notifications } = props;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadcrumb} />
                <Notifications notifications={notifications} />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};



export async function getServerSideProps(ctx) {
    const client_id = ctx.req.session.client_id;
    // call api
    const response = await axios.get(`${process.env.API}/users/notifications/${client_id}`);
    console.log(response.data);
    return {
        props: {
            notifications: response.data
        }
    }
}

const mapStateToProps = state => {
    return {
        breadcrumb: state.lang.langData.notification_page.breadcrumb
    }
}

export default connect(mapStateToProps)(AccountNotificationsPage);
