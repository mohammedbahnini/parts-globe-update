import React from 'react';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import BreadCrumb from '../components/elements/BreadCrumb';
import Login from '../components/Login';
import { connect } from 'react-redux';

const RegisterPage = (props) => {
    const { login_breadcrumb } = props;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />

            <main id="homepage-1">
                <BreadCrumb breacrumb={login_breadcrumb} />
                <Login />
            </main>
            <FooterFullwidth />
        </div>
    )

}
function mapStateToProps(state) {
    return state.lang.langData.login_page;
}

export default connect(mapStateToProps)(RegisterPage);
