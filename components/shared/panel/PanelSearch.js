import React, { Component } from 'react';
import { connect } from 'react-redux';


class PanelSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        //Router.push(`/search?keyword=${keyword}`);
        window.location = `/search?keyword=${keyword}`;
    }

    updateStateKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const { panel_search } = this.props;
        return (
            <div className="ps-panel__wrapper">
                <div className="ps-panel__header">
                    <form
                        className="ps-form--search-mobile"
                        action="index.html"
                        method="get"
                        onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder={panel_search.placeholder}
                                onChange={this.updateStateKeyword}
                            />
                            <button onClick={this.handleSubmit.bind(this)} >
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="navigation__content"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panel_search: state.lang.langData.navigation_list.panel_search
    }
}
export default connect(mapStateToProps)(PanelSearch);
