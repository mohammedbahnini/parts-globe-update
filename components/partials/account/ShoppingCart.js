import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';

import Link from 'next/link';
import Router from 'next/router';
import { isLoggedIn } from '../../../helpers/auth';


class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    handleChechOut = async (e) => {
        const isLogged = await isLoggedIn();
        console.log('is logged ' + isLogged);
        if (isLogged)
            Router.push('/account/checkout');
        else Router.push('/login');
    }



    render() {
        const { amount, cartTotal, cartItems } = this.props.cart;
        const { cart_page } = this.props;

        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>{cart_page.title}</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="table-responsive">
                            <table className="table ps-table--shopping-cart">
                                <thead>
                                    <tr>
                                        <th>{cart_page.product_column}</th>
                                        <th>{cart_page.warehouse_column}</th>
                                        <th>{cart_page.price_column}</th>
                                        <th>{cart_page.quantity_column}</th>
                                        <th>{cart_page.total_column}</th>
                                        <th>{cart_page.action_column}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCartItems.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="ps-product--cart">
                                                    <div className="ps-product__thumbnail">
                                                        <Link
                                                            href="/product/[pid]"
                                                            as={`/product/${product.id}`}>
                                                            <a>
                                                                <img src={`${process.env.HOST}/${product.thumbnail}`} alt="" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="ps-product__content">
                                                        <Link
                                                            href="/product/[pid]"
                                                            as={`/product/${product.id}`}>
                                                            <a className="ps-product__title">
                                                                {product.title}
                                                            </a>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="warehouse">
                                                {product.warehouse}
                                            </td>
                                            <td className="price">
                                                {product.price} $
                                            </td>
                                            <td>
                                                {product.quantity}
                                            </td>
                                            <td>
                                                {product.quantity * product.price} $
                                            </td>
                                            <td>
                                                <a
                                                    href="#"
                                                    onClick={this.handleRemoveCartItem.bind(this, product)}>
                                                    <i className="icon-cross"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    {cart_page.back_to_shop_label}
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-content-end">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block--shopping-total">
                                    <div className="ps-block__header">

                                    </div>
                                    <div className="ps-block__content">
                                        <ul className="ps-block__product">
                                            {cartItems.length > 0
                                                ? cartItems.map(
                                                    (product, index) => {
                                                        if (index < 3) {
                                                            return (
                                                                <li
                                                                    key={product.id}>
                                                                    <span className="ps-block__estimate">
                                                                        <Link
                                                                            href="/product/[pid]"
                                                                            as={`/product/${product.id}`}>
                                                                            <a className="ps-product__title">
                                                                                {product.title}
                                                                                <br />
                                                                                X {` ${product.quantity}`}
                                                                            </a>
                                                                        </Link>
                                                                    </span>
                                                                </li>
                                                            );
                                                        }
                                                    }
                                                )
                                                : ''}
                                        </ul>
                                        <h3>
                                            {cart_page.total_label} <span>${amount}</span>
                                        </h3>
                                    </div>
                                </div>

                                <a className="ps-btn ps-btn--fullwidth" onClick={this.handleChechOut}>
                                    {cart_page.button_checkout_label}
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        cart_page: state.lang.langData.cart_page
    }
};
export default connect(mapStateToProps)(ShoppingCart);
