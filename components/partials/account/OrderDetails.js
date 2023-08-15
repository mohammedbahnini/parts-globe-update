import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import Router from 'next/router';
import axios from 'axios';
import { getClientData } from '../../../helpers/auth';
import { connect } from 'react-redux';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = async () => {
        const { orderID } = Router.query;
        const response = await axios.get(`${process.env.API}/order/detail?orderID=${orderID}`);

        this.setState({ ...response.data });
    }

    render() {
        const order = this.state;
        const { order_detail_page } = this.props;

        return (
            <div>
                {order && (
                    <section className="ps-my-account ps-page--account">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="ps-section__left">
                                        <AccountMenuSidebar activeLink={order_detail_page.active_link} />
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="ps-page__content">
                                        <div className="ps-section--account-setting">
                                            <div className="ps-section__header">
                                                <h3>
                                                    {order_detail_page.title} #500884010 -
                                                <strong>{order.Received ? `${order_detail_page.order_recieved_label}` : `${order_detail_page.order_not_recieved_label}`}</strong>
                                                </h3>
                                            </div>
                                            <div className="ps-section__content">
                                                <div className="row">
                                                    <div className="col-md-6 col-12">
                                                        <figure className="ps-block--invoice">
                                                            <figcaption>
                                                                {order_detail_page.address_title}
                                                            </figcaption>
                                                            <div className="ps-block__content">
                                                                <strong>
                                                                    {order.firstName} {order.lastName}
                                                                </strong>
                                                                <p>
                                                                    {order_detail_page.address_label} : {order.Address}
                                                                </p>
                                                                <p>
                                                                    {order_detail_page.phone_label} : {order.PhoneNumber}
                                                                </p>
                                                            </div>
                                                        </figure>
                                                    </div>

                                                    <div className="col-md-6 col-12">
                                                        <figure className="ps-block--invoice">
                                                            <figcaption>
                                                                {order_detail_page.payment_title}
                                                            </figcaption>
                                                            <div className="ps-block__content">
                                                                <p>
                                                                    {order_detail_page.payment_method_label} : {order.PaymentProcedrue}
                                                                </p>
                                                            </div>
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table ps-table--shopping-cart orders-detail">
                                                        <thead>
                                                            <tr>
                                                                <th>{order_detail_page.product_column}</th>
                                                                <th>{order_detail_page.price_column}</th>
                                                                <th>{order_detail_page.quantity}</th>
                                                                <th>{order_detail_page.amount_column}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {order.products && (
                                                                order.products.map(
                                                                    product => (
                                                                        <tr key={product.Warehouse}>
                                                                            <td>
                                                                                {product.Product}
                                                                            </td>
                                                                            <td className="price">
                                                                                {product.Price} $
                                                                            </td>

                                                                            <td className="quantity">{product.Quantity}</td>
                                                                            <td className="price">
                                                                                {product.Price} $
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <Link href="/account/orders">
                                                    <a className="ps-btn ps-btn--sm ">
                                                        {order_detail_page.back_to_orders}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        order_detail_page: state.lang.langData.order_detail_page
    }
}


export default connect(mapStateToProps)(OrderDetail);