import React, { Component, createRef } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import { connect } from 'react-redux';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuWidth: 0
        }
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }


    componentDidMount() {
        const setSize = async () => {
            const menu = document.querySelector('div.header__menu');

            let width = menu.clientWidth;
            const paddingRight = window.getComputedStyle(menu).getPropertyValue('padding-right').replace('px', '');
            const paddingLeft = window.getComputedStyle(menu).getPropertyValue('padding-left').replace('px', '');
            width = width - paddingRight - paddingLeft;
            const categoriesMenu = document.querySelector('div.catalogs__menu');
            this.setState({
                menuWidth: width
            });
        }
        setSize();
        window.addEventListener('resize', () => {
            setSize();
        });

    }

    render() {
        const { langData } = this.props;
        return (
            <nav className="navigation">
                <div className="ps-container header__menu" >

                    <div className="navigation__left">
                        <div className="menu--product-categories">

                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Catalogs</span>
                            </div>
                            <div className="menu__content catalogs__menu" style={{ width: this.state.menuWidth }} >
                                {<Menu
                                    data={langData.product_categories}
                                    className="menu--dropdown"
                                />}
                            </div>

                        </div>
                    </div>

                    <div className="navigation__right">
                        {<Menu
                            data={langData.menuPrimary}
                            className="menu"
                        />}
                        <ul className="navigation__extra">
                            <li>
                                <LanguageSwicher />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return state.lang;
}

export default connect(mapStateToProps)(NavigationDefault);
