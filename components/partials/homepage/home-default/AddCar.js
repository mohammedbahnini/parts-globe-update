import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';

const { Option } = Select;

/* this compenet contains 4 elements

1 car select 
2 model select 
3 specification
4 btn search

*/


class AddCar extends Component {









    onCarSearch(e) {
        console.log(e.target.value);
    }


    render() {

        const { vihecule_search_home } = this.props;
        return (
            <div className="ps-container">

                <div className=" ps-breadcrumb vehicule-breadcrumb">

                    <div className="vehicule-search-heading">
                        <h3>{vihecule_search_home.title}</h3>
                    </div>

                    <div className="vehicule-search-body"  >

                        <div className="car-select" >
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder={`${vihecule_search_home.vihecule_select_placeholder}`}
                                filterOption={
                                    (input, option) => {
                                        return option.props.children.toLowerCase().includes(input.toLowerCase());
                                    }
                                }
                            >
                                <Option key='Audi'>Audi</Option>
                            </Select>
                        </div>

                        <div className="model-select">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder={`${vihecule_search_home.model_select_placeholder}`}
                                filterOption={
                                    (input, option) => {
                                        return option.props.children.toLowerCase().includes(input.toLowerCase());
                                    }
                                }
                            >
                                <Option key='Audi'>Audi</Option>
                            </Select>
                        </div>



                        <div className="model-number-select">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder={`${vihecule_search_home.model_number_select_placeholder}`}
                                filterOption={
                                    (input, option) => {
                                        return option.props.children.toLowerCase().includes(input.toLowerCase());
                                    }
                                }
                            >
                                <Option key='Audi'>Audi</Option>
                            </Select>
                        </div>

                        <div className="vehicule-submit">
                            <button className="ps-btn" >
                                <i className="icon-magnifier"></i>{vihecule_search_home.search_botton_text}
                            </button>
                        </div>

                    </div>

                </div>




            </div>
        )
    }
}

const stateToProps = state => {
    return state.lang.langData;
}

export default connect(stateToProps)(AddCar);