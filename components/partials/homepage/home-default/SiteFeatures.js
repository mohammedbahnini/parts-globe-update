import React from 'react';
import { connect } from 'react-redux';

const SiteFeatures = ({ website_features }) => {

    return (


        <div className="ps-site-features">
            <div className="ps-container">
                <div className="ps-block--site-features">
                    <div className="ps-block__item">
                        <div className="ps-block__left">
                            <i className="icon-rocket"></i>
                        </div>
                        <div className="ps-block__right">
                            <h4>{website_features.free_delivery.title}</h4>
                            <p>{website_features.free_delivery.text}</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left">
                            <i className="icon-sync"></i>
                        </div>
                        <div className="ps-block__right">
                            <h4>{website_features.return.title}</h4>
                            <p>{website_features.return.text}</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left">
                            <i className="icon-credit-card"></i>
                        </div>
                        <div className="ps-block__right">
                            <h4>{website_features.payment.title}</h4>
                            <p>{website_features.payment.text}</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left">
                            <i className="icon-bubbles"></i>
                        </div>
                        <div className="ps-block__right">
                            <h4>{website_features.support.title}</h4>
                            <p>{website_features.support.text}</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left">
                            <i className="icon-gift"></i>
                        </div>
                        <div className="ps-block__right">
                            <h4>{website_features.gift_service.title}</h4>
                            <p>{website_features.gift_service.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const stateToProps = (state) => {
    return state.lang.langData;
}
export default connect(stateToProps)(SiteFeatures);
