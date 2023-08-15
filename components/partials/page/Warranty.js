import React from 'react';
import BreadCrumb from '../../elements/BreadCrumb';
import { connect } from 'react-redux';



const Warranty = ({data}) => {
    
        const { breadcrumb , conditions , cases , return_parts } = data;
    
        return (
            <React.Fragment>
                <BreadCrumb breacrumb={breadcrumb} />
            <div className="ps-section--custom">
                
            <div className="container">

                <div className="ps-section__content">
                    <h4>{data.page_title}</h4>
                    <p>{data.warranty_description[0]}</p>
                    <br />
                    <p>{data.warranty_description[1]}</p>
                    <br />


                    <h4>{conditions.title}</h4>
                    <p>{conditions.text}</p>
                    <ul>
                        { conditions.list.map( item=>{ 
                            return (
                                <li key={item}>{item}</li>
                            )
                        } ) }
                    </ul>
                    <br />

                    <h4>{cases.title}</h4>
                    <ul>
                        { cases.list.map( item=>{ 
                            return (
                                <li key={item}>{item}</li>
                            )
                        } ) }
                    </ul>
                    <br />

                    <h4>{return_parts.title}</h4>
                    <ul>
                        { return_parts.list.map( item=>{ 
                            return (
                                <li key={item}>{item}</li>
                            )
                        } ) }
                    </ul>
                    

                </div>

               

            </div>
        </div>
        </React.Fragment>
        )
}

const mapStateToProps = (state)=>{
    return {
        data : state.lang.langData.warranty_page
    };
}

export default connect(mapStateToProps)(Warranty);
