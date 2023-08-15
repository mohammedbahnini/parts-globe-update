import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { isLoggedIn, getClientData } from '../../../../helpers/auth';
import { changeLoggedInStatus } from '../../../../store/auth/action';
import { logOut } from '../../../../store/auth/action';
import Router from 'next/router';
import axios from 'axios';

class AccountQuickLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleLogout = e => {
        e.preventDefault();
        axios.get(`${process.env.API}/user/logout`)
            .then(result => {
                if (result.data.loggedout) {
                    this.props.dispatch(logOut());
                    Router.push('/login');
                }
            });
    };

    async componentDidMount() {
        // check if the user is logged in
        const isLogged = await isLoggedIn();
        this.props.dispatch(changeLoggedInStatus(isLogged));
        if (isLogged) {
            const clientData = await getClientData();
            this.setState({ ...clientData });
        }
    }

    render() {
        const { accountLinks } = this.props.lang.langData;
        const isLoggedIn = this.props.auth.isLoggedIn;
        const client = this.state;
        const { langData } = this.props.lang;

        if (isLoggedIn === true) {
            return (
                <div className="ps-block--user-account">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="icon-user"></i>
                        <h4 style={{ marginLeft: '10px', marginTop: '10px' }}>{client.first_name} {client.last_name}</h4>
                    </div>
                    <div className="ps-block__content">
                        <ul className="ps-list--arrow">
                            {accountLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url}>
                                        <a>{link.text}</a>
                                    </Link>
                                </li>
                            ))}
                            <li className="ps-block__footer">
                                <a
                                    href="#"
                                    onClick={this.handleLogout.bind(this)}>
                                    {langData.logout_label}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ps-block--user-header">
                    <div className="ps-block__left">
                        <i className="icon-user"></i>
                    </div>
                    <div className="ps-block__right" style={{ display: 'block' }}>
                        <Link href="/login">
                            <a>{langData.login_label}</a>
                        </Link>
                        <Link href="/register">
                            <a>{langData.register_label}</a>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AccountQuickLinks);
