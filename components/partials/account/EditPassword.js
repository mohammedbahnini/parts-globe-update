import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, DatePicker } from 'antd';
import axios from 'axios';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { Alert , notification } from 'antd';
import  {LoadingOutlined} from '@ant-design/icons';
import Router from 'next/router';
import { connect } from 'react-redux';

class EditPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            old_password : '' ,
            new_password : '',
            confirm_password : '', 
            updating : false , 
            errors : []
        };
    }

    handleInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleUpdate =async (e)=>{
        if( this.state.updating == false)
        {
            e.preventDefault();
            this.setState({updating : true , errors : []});
         
            setTimeout(async ()=>{

                const result_update = await axios.post(`${process.env.API}/user/update-password` , {
                    oldPassword : this.state.old_password , 
                    newPassword : this.state.new_password, 
                    confirmPassword : this.state.confirm_password
                });
                
                this.setState({updating : false});
                if( result_update.data.errors)
                {
                    this.setState({errors : result_update.data.errors});
                }
                else if( result_update.data.success)
                {
                    this.setState({errors : []});
                    notification['success']({
                        message : 'Success',
                        description : 'Your password has been updated successfuly !',
                        duration : 5 ,
                        onClose : ()=>{
                            Router.push('/account/user-information');
                        }
                    });
                    Router.push('/account/user-information');
                }
                else 
                {
                    this.setState({errors : []});
                    notification['error']({
                        message : 'Error',
                        description : 'An error occured during updating your informations , try later !',
                        duration : 5 
                    });
                }
            },1000);
        }

       

       
    }

    render() {
        const errorsStyle = {marginBottom : '20px'};
        const {edit_password_page }=this.props;

        return (
       <Fragment>
           {this.state && (
                <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <AccountMenuSidebar activeLink={edit_password_page.active_link} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                       
                            <div className="ps-page__content">
                                <Form

                                    className="ps-form--account-setting"
                                    onSubmit={(e)=>this.handleUpdate(e)}>
                                    <div className="ps-form__header">
                                        <h3>{edit_password_page.title}</h3>
                                    </div>
                                    <div className="ps-form__content">
                                        {this.state.errors.map( error => {
                                            return (
                                                <div style={errorsStyle} key={error}>
                                                    <Alert message={error} type="error" showIcon />
                                                </div>
                                            )
                                        })
                                        }
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <Form.Item label={edit_password_page.old_password_label}>
                                                    <Input
                                                        className="form-control"
                                                        type="password"
                                                        name="old_password"
                                                        onChange={(e)=>this.handleInput(e)}
                                                        value={this.state.old_password}
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label={edit_password_page.new_password_label}>
                                                    <Input
                                                        className="form-control"
                                                        type="password"
                                                        name="new_password"
                                                        value={this.state.new_password}
                                                        onChange={(e)=>this.handleInput(e)}
                                                    />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">                      
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                <Form.Item label={edit_password_page.confirm_new_password_label}>
                                                        
                                                        <Input
                                                            className="form-control"
                                                            type="password"
                                                            value = {this.state.confirm_password}
                                                            onChange={(e)=>this.handleInput(e)}
                                                            name="confirm_password"
                                                        />
                                                </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                                {this.state.updating && (<LoadingOutlined style={{marginRight:'15px'}} />)}
                                                {this.state.updating && edit_password_page.button_updating_state_text}
                                                {this.state.updating == false && edit_password_page.button_update_state_text}
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           )}
       </Fragment>
           
        );
    }
}

const mapStateToProps = state =>{
    return {
        edit_password_page : state.lang.langData.edit_password_page
    }
}

export default  connect(mapStateToProps)(EditPassword);
