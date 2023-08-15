import React from 'react';
import axios from 'axios';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import EditPassword from '../../components/partials/account/EditPassword';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';

const UserInformationPage = (props) => {

    const {breadcrumb} = props;
    
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadcrumb} />
                <EditPassword />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};
 const mapStateToProps = state =>{
     return {
         breadcrumb:state.lang.langData.edit_password_page.breadcrumb
    }
 }

export default connect(mapStateToProps)(UserInformationPage);
