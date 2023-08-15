import React, { Component } from 'react';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { Table, Tag } from 'antd';
import { dateFormater } from '../../../helpers/formater';
import axios from 'axios';
import { connect } from 'react-redux';

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [...this.props.notifications]
        };
    }

    changeStatus = async (id) => {
        const response = await axios.post(`${process.env.API}/user/update-notification-status/${id}`);
        if (response.data.updated) {
            const newState = this.state.notifications.map(item => {
                if (item.notification_id === id) {
                    item.is_checked = true;
                }
                return item;
            });
            this.setState({ notifications: newState });
        }
    }


    render() {

        const { notification_page } = this.props;
        const tableData = this.state.notifications;

        const tableColumn = [
            {
                title: `${notification_page.order_date_label}`,
                dataIndex: 'notification_date',
                width: '150px',
                align: 'cetner',
                render: text => <p>{dateFormater(text)}</p>
            },
            {
                title: `${notification_page.content_label}`,
                dataIndex: 'content',
            },
            {
                title: `${notification_page.catgory_label}`,
                dataIndex: 'category',
                align: 'center',
                render: text => (
                    <span>
                        <Tag key={text}>
                            {text.toUpperCase()}
                        </Tag>
                    </span>
                ),
            },
            {
                title: `${notification_page.readed_label}`,
                dataIndex: 'is_checked',
                align: 'center',
                render: (text, record) => {
                    const color = record.is_checked ? '#f50' : '#87d068';
                    return (
                        <Tag key={text} color={color}>
                            {record.is_checked ? 'Readed' : 'New'}
                        </Tag>
                    )
                }
            },
            {
                title: `${notification_page.action_label}`,
                key: 'action',
                width: '150px',
                align: 'center',
                render: (text, record) => (
                    <span>
                        {!record.is_checked && (<a onClick={(e) => this.changeStatus(record.notification_id)}>Mark as read</a>)}
                    </span>
                ),
            },
        ];

        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <AccountMenuSidebar activeLink={notification_page.active_link} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>{notification_page.title}</h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <Table columns={tableColumn} dataSource={tableData} rowKey={(record) => record.notification_id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

const mapStateToProps = state => {
    return {
        notification_page: state.lang.langData.notification_page
    }
}

export default connect(mapStateToProps)(Notifications);
