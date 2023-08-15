import React, { Component, Fragment } from 'react';
import { Form, Input, Radio, DatePicker } from 'antd';
import axios from 'axios';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { Alert , notification } from 'antd';
import  {LoadingOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.client , 
            updating : false , 
            errors : []
        };
    }

    handleInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleUpdate = (e)=>{
        e.preventDefault();
        this.setState({updating : true});
        setTimeout(async ()=>{

            const result_update = await axios.post(`${process.env.API}/user/update` , {
                firstName : this.state.first_name , 
                lastName : this.state.last_name, 
                address : this.state.address , 
                postalCode : this.state.postal_code, 
                phone : this.state.phone
            });
            console.log(result_update);
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
                    description : 'Your personal informations has been updated successfuly !',
                    duration : 5 
                });
                
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
        },1000)

       
    }

    render() {
        const {user_information_page} = this.props;

        const errorsStyle = {marginBottom : '20px'};
        return (
       <Fragment>
           {this.state && (
                <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">

                                <AccountMenuSidebar activeLink={user_information_page.active_link} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                       
                            <div className="ps-page__content">
                                <Form
                                    className="ps-form--account-setting"
                                    onSubmit={this.handleUpdate}>
                                    <div className="ps-form__header">
                                        <h3>{user_information_page.title}</h3>
                                    </div>
                                    <div className="ps-form__content">
                                    {this.state.errors.map( error => {
                                        return (
                                            <div style={errorsStyle}>
                                                <Alert message={error} type="error" showIcon />
                                            </div>
                                        )
                                    })
                                    }
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Form.Item label={user_information_page.first_name_label}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder={user_information_page.first_name_placeholder}
                                                            name="first_name"
                                                            onChange={(e)=>this.handleInput(e)}
                                                            value={this.state.first_name}
                                                        />
                                                    </Form.Item>
                                                </div>

                                                <div className="col-sm-6">
                                                    <Form.Item label={user_information_page.last_name_label}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder={user_information_page.last_name_placeholder}
                                                            name="last_name"
                                                            onChange={(e)=>this.handleInput(e)}
                                                            value={this.state.last_name}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <Form.Item label={user_information_page.address_label}>
                                                <Input.TextArea
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={user_information_page.address_placeholder}
                                                    name="address"
                                                    value={this.state.address}
                                                    onChange={(e)=>this.handleInput(e)}
                                                    autoSize={ {minRows:2 , maxRows : 5}}
                                                />
                                            </Form.Item>             
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label={user_information_page.phone_number_label}>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder={user_information_page.phone_number_placeholder}
                                                        name="phone"
                                                        value={this.state.phone}
                                                        onChange={(e)=>this.handleInput(e)}
                                                    />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item label={user_information_page.email_label}>
                                                      
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder={user_information_page.email_placeholder}
                                                                value = {this.state.email}
                                                                name="email"
                                                                disabled
                                                            />
                                                        
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                <Form.Item label={user_information_page.postal_code_label}>
                                                      
                                                      <Input
                                                          className="form-control"
                                                          type="text"
                                                          placeholder={user_information_page.postal_code_placeholder}
                                                          value = {this.state.postal_code}
                                                          onChange={(e)=>this.handleInput(e)}
                                                          name="postal_code"
                                                      />
                                                  
                                              </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                                {this.state.updating && (<LoadingOutlined style={{marginRight:'15px'}} />)}
                                                {this.state.updating && user_information_page.button_updating_state_text }
                                                {this.state.updating == false && user_information_page.button_update_state_text}
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
const WrapFormUserInformation = Form.create()(UserInformation);

const mapStateToProps = (state)=>{
    return {
        user_information_page : state.lang.langData.user_information_page
    }
}

export default connect(mapStateToProps)(WrapFormUserInformation);
