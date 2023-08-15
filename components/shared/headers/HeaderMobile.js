import React, { Component } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';

class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
        this.state = {
            searchPanel: false,
            keyword: '',
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const keyword = this.state.keyword;
        //Router.push(`/search?keyword=${keyword}`);
        window.location = `/search?keyword=${keyword}`;
    }

    updateStateKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        return (
            <header className="header header--mobile">
                {/** <div className="header__topp" style={{ display: 'none' }}>
                    <div className="header__left">
                        <p>Welcome to Martfury Online Shopping Store !</p>
                    </div>
                    <div className="header__right">
                        <ul className="navigation__extra">
                            <li>
                                <Link href="/vendor/become-a-vendor">
                                    <a>Sell on Martfury</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Tract your order</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul>
                    </div>
                </div> */}

                <div className="ps-settings--mobile" style={{ 'backgroundColor': '#f4f5f5', 'padding': '10px' }}>
                    <LanguageSwicher />
                </div>

                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                                <img src="/static/img/main-logo.png" alt="" />
                            </a>
                        </Link>
                    </div>
                    <div className="navigation__right">
                        <MobileHeaderActions />
                    </div>
                </div>
                <div className="ps-search--mobile">


                    <form
                        className="ps-form--search-mobile"
                        action="index.html"
                        method="get"
                        onSubmit={this.handleSubmit}>
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                                onChange={this.updateStateKeyword}
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>


            </header>
        );
    }
}

export default HeaderMobile;
