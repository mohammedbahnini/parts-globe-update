import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import ProductResult from '../../../elements/products/ProductSearchResult';
import { products } from '../../../../public/static/data/product';
import Routes from 'next-routes';
import { connect } from 'react-redux';



class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            searchProducts: products,
            keyword: '',
        };
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
        const { searchPanel, searchProducts } = this.state;
        const { placeholder, button_text } = this.props;
        return (
            <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>

                <input
                    className="form-control"
                    type="text"
                    placeholder={placeholder}
                    onChange={this.updateStateKeyword}
                />
                <button onClick={this.handleSubmit.bind(this)}>{button_text}</button>
                <div
                    className={`ps-panel--search-result${searchPanel && searchPanel === true ? ' active ' : ''
                        }`}>
                    {/* <div className="ps-panel__content">
                        {searchProducts.length > 0 ? (
                            searchProducts.map(product => (
                                <ProductResult
                                    product={product}
                                    key={product.id}
                                />
                            ))
                        ) : (
                                <span>Not found! Try with another keyword.</span>
                            )}
                    </div> */}
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                            <a>See all results</a>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return state.lang.langData.search_header;
}

export default connect(mapStateToProps)(SearchHeader);
