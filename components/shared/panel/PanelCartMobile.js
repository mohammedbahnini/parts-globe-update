import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, removeItem } from '../../../store/cart/action';
import Link from 'next/link';

class PanelCartMobile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartItems } = this.props.cart;
        const { panel_cart } = this.props;

        return (
            <div className="ps-panel--wrapper" style={{ paddingBottom: 80 }}>
                <div className="ps-panel__header">
                    <h3>{panel_cart.title}</h3>
                </div>
                <div className="ps-panel__content">
                    <div className="ps-cart--mobile">
                        <div className="ps-cart__content">
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map(product => (
                                    <div
                                        className="ps-product--cart-mobile"
                                        key={product.id}>
                                        <div className="ps-product__thumbnail">
                                            <Link
                                                href="/product/[pid]"
                                                as={`/product/${product.id}`}>
                                                <a>
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
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
                                            <Link
                                                href="/product/[pid]"
                                                as={`/product/${product.id}`}>
                                                <a className="ps-product__title">
                                                    {product.title}
                                                </a>
                                            </Link>
                                            <br />
                                            <small>{product.quantity} x {product.price} $</small>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                    <div className="ps-cart__content">
                                        <div className="ps-cart__items">
                                            <span>{panel_cart.no_product_label}</span>
                                        </div>
                                    </div>
                                )}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                {panel_cart.sub_total_label} : <strong>{amount} $</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart">
                                    <a className="ps-btn">{panel_cart.view_cart_label}</a>
                                </Link>
                                <Link href="/account/shopping-cart">
                                    <a className="ps-btn">{panel_cart.checkout_label}</a>
                                </Link>
                            </figure>
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
        panel_cart: state.lang.langData.navigation_list.panel_cart
    }
};
export default connect(mapStateToProps)(PanelCartMobile);
