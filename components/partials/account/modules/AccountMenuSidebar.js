import React, { Fragment } from 'react';
import Link from 'next/link';
import { getClientData } from '../../../../helpers/auth';
import axios from 'axios';
import { logOut } from '../../../../store/auth/action';
import Router from 'next/router';
import { connect } from 'react-redux';


class AccountMenuSidebar extends React.Component  {
    constructor(props)
    {
        super(props);
        this.state = {};
    }


    handleLogout = e => {
        e.preventDefault();
        axios.get(`${process.env.API}/user/logout`)
        .then(result=>{
            if( result.data.loggedout )
            {
                this.props.dispatch(logOut());
                Router.push('/login');
            }
        });
    };

    // get client data 
    async componentDidMount(){
        const client = await getClientData();
        this.setState({...client}); 
    }

    render(){
        const {activeLink , accout_menu_sidebar } = this.props;
        const client = this.state;

        return (
        <Fragment>
            {client && (
                 <aside className="ps-widget--account-dashboard">
                 <div className="ps-widget__header">
                     <i className="icon-user" style={{fontSize : '50px'}}></i>
                     <figure>
                         <figcaption>{accout_menu_sidebar.hello_label}</figcaption>
                         <p>{client.first_name} {client.last_name}</p>
                     </figure>
                 </div>
                 <div className="ps-widget__content">
                     <ul>
                         {accout_menu_sidebar.menu.map(link => (
                             <li
                                 key={link.text}
                                 className={link.text === activeLink ? 'active': '' }>
                                 <Link href={link.url}>
                                     <a>
                                         <i className={link.icon}></i>
                                         {link.text}
                                     </a>
                                 </Link>
                             </li>
                         ))}
                         <li>
                            <a onClick={this.handleLogout.bind(this)} href="#"> 
                                     <i className="icon-power-switch"></i>
                                     {accout_menu_sidebar.logout_label}
                                 </a>
                         </li>
                     </ul>
                 </div>
             </aside>
            )}
        </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        accout_menu_sidebar : state.lang.langData.accout_menu_sidebar
    };
};

export default connect(mapStateToProps)(AccountMenuSidebar);
