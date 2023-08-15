import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import UserInformation from '../../components/partials/account/UserInformation';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const UserInformationPage = (props) => {
    const { client, breadcrumb } = props;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadcrumb} />
                <UserInformation client={client} />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};


export async function getServerSideProps(ctx) {
    // getting client id 
    const clientID = ctx.req.session.client_id;
    const response = await axios.post(`${process.env.API}/user/info`, {
        client_id: clientID
    });
    return {
        props: {
            client: response.data.client
        }
    };
}

const mapStateToProps = (state) => {
    return {
        breadcrumb: state.lang.langData.user_information_page.breadcrumb
    }
}

export default connect(mapStateToProps)(UserInformationPage);
