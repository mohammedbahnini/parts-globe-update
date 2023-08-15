import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const HomeDefaultTopCategories = ({ top_catalogs }) => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>{top_catalogs.title}</h3>
            <div className="row">
                {top_catalogs.catalogs.map(catalog => {
                    return (
                        <div key={catalog.title} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                            <div className="ps-block--category">
                                <Link href="/">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img src={catalog.img_url} alt="" />
                                <p>{catalog.title}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
);

const stateToProps = state => {
    return state.lang.langData;
}


export default connect(stateToProps)(HomeDefaultTopCategories);