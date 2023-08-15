import React, { Component } from 'react';
import { connect } from 'react-redux';

import InjectedForm from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props.cart;
        const { title } = this.props;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>{title}</h1>
                    </div>
                    <div className="ps-section__content">
                        <InjectedForm
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        title: state.lang.langData.payment_page.title
    };
};
export default connect(mapStateToProps)(Checkout);
