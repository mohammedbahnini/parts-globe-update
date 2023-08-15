import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import SearchResult from '../../components/partials/shop/SearchResult';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import axios from 'axios';
import { connect } from 'react-redux';


class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { breadcrumb } = this.props;

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadcrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="ps-container">
                        <SearchResult />
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        )

    }


}

const mapStateToProps = (state) => {
    return {
        breadcrumb: state.lang.langData.search_page.breadcrumb
    }
}


export default connect(mapStateToProps)(SearchResultsPage);
