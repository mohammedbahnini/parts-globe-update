import React, { useState, useEffect } from 'react';
import menuData from '../../../../public/static/data/menu';
import Menu from '../../../elements/menu/Menu';
import { connect } from 'react-redux';

const MenuCategories = (props) => {
    const { langData } = props;
    const [style, setStyle] = useState({ width: 0 });

    useEffect(() => {

        const setSize = async () => {
            const menu = document.querySelector('div.header__menu');
            let width = menu.clientWidth;
            const paddingRight = window.getComputedStyle(menu).getPropertyValue('padding-right').replace('px', '');
            const paddingLeft = window.getComputedStyle(menu).getPropertyValue('padding-left').replace('px', '');
            width = width - paddingRight - paddingLeft;
            const categoriesMenu = document.querySelector('div.catalogs__menu');
            setStyle({ width });
        }
        setSize();
        window.addEventListener('resize', () => {
            setSize();
        });


    }, []);

    return (
        <div className='catalogs__menu' style={style}>
            <Menu data={langData.product_categories} className="menu--dropdown" />
        </div>

    )
}

const mapStateToProps = state => {
    return state.lang;
}

export default connect(mapStateToProps)(MenuCategories);
