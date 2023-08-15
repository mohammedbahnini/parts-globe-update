import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableOrders from './modules/TableOrders';
import { Table, Tag } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';

class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { orders, orders_page } = this.props;
        const tableColumn = [
            {
                title: `${orders_page.date_column}`,
                dataIndex: 'OrderDate',
                align: 'center',
                render: (text) => (
                    <span>{new Date(text).getDate() + '-' + new Date(text).getMonth() + '-' + new Date(text).getFullYear()}</span>
                )
            },
            {
                title: `${orders_page.amount_colmn}`,
                dataIndex: 'Amount',
                render: (text, record) => (
                    <span className="text-right">{record.Amount} $</span>
                ),
                align: 'center'
            },
            {
                title: `${orders_page.status_column}`,
                dataIndex: 'Received',
                render: (text, record) => (
                    <>
                        {record.Received ?
                            (
                                <Tag color="#87d068">
                                    {orders_page.recieved_label}
                                </Tag>
                            ) :
                            (
                                <Tag color="#108ee9">
                                    {orders_page.new_label}
                                </Tag>)
                        }
                    </>
                ),
                align: 'center'
            },
            {
                title: `${orders_page.recieved_at_column}`,
                align: 'center',
                dataIndex: 'ReceivedAt',
                render: (text, record) => (
                    <span>{record.ReceivedAt}</span>
                )
            },
            {
                title: `${orders_page.detail_column}`,
                align: 'center',
                key: 'detail',
                render: (text, record) => (
                    <Link href={`/account/order-detail?orderID=${record.IdOrder}`}>
                        <a>{orders_page.button_detail_text}</a>
                    </Link>
                )
            }
        ];

        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <AccountMenuSidebar activeLink={orders_page.active_link} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>{orders_page.title}</h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <Table
                                            columns={tableColumn}
                                            dataSource={orders}
                                            rowKey={(record) => record.IdOrder}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders_page: state.lang.langData.orders_page
    }
}

export default connect(mapStateToProps)(Orders);
