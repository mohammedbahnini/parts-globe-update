import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';
import { isLoggedIn } from '../../../../helpers/auth';
import Router from 'next/router';

class MiniCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    handleCheckOut = async (e) => {
        const isLogged = await isLoggedIn();
        if (isLogged)
            Router.push('/account/checkout');
        else Router.push('/login');
    }

    render() {

        const { amount, cartTotal, cartItems } = this.props.cart;
        const { langData } = this.props.lang;
        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
                {cartItems && cartItems.length > 0 ? (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            {cartItems && cartItems.length > 0
                                ? cartItems.map(product => (
                                    <div
                                        className="ps-product--cart-mobile"
                                        key={product.id}>
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
                                            <a
                                                className="ps-product__remove"
                                                onClick={this.handleRemoveCartItem.bind(
                                                    this,
                                                    product
                                                )}>
                                                <i className="icon-cross"></i>
                                            </a>
                                            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                                                <a className="ps-product__title">
                                                    {product.title}
                                                </a>
                                            </Link>
                                            <br />
                                            <small>{product.quantity} x {product.price} $</small>
                                        </div>
                                    </div>
                                ))
                                : ''}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                {langData.mini_cart.sub_total_label}<strong>{amount ? amount : 0} $</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart" as="/cart">
                                    <a className="ps-btn">{langData.mini_cart.view_cart_button_text}</a>
                                </Link>

                                <button className="ps-btn" onClick={this.handleCheckOut}>{langData.mini_cart.checkout_button_text}</button>
                            </figure>
                        </div>
                    </div>
                ) : (
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                <span>{langData.mini_cart.no_product_label}</span>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(MiniCart);
