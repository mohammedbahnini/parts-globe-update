import React from 'react';
import { connect } from 'react-redux';

const Newsletters = (props) => {
    const { layout, newsletter } = props;

    return (

        <section className="ps-newsletter">
            <div className={layout && layout === 'container' ? ' container' : 'ps-container'}>
                <form className="ps-form--newsletter" action="do_action" method="post">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-form__left">
                                <h3>{newsletter.title}</h3>
                                <p>{newsletter.text}</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-form__right">
                                <div className="form-group--nest">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder={newsletter.input.placeholder}
                                    />
                                    <button className="ps-btn">{newsletter.input.button_text}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        newsletter: state.lang.langData.newsletter
    }
}

export default connect(mapStateToProps)(Newsletters);
