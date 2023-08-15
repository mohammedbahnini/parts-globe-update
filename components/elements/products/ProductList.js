import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';



class ProductList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const products = this.props.products;
        const { table_columns } = this.props;

        return (

            <React.Fragment>
                <table className="product-list full-details">
                    <thead>
                        <tr>
                            <th className="product-detail-col">{table_columns.detail_header}</th>
                            <th className="text-center">{table_columns.warehouse_header}</th>
                            <th className="text-center">{table_columns.count_header}</th>
                            <th className="text-center">{table_columns.terme_header}</th>
                            <th className="text-center">{table_columns.price_header}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => {
                            return <ProductItem product={item} key={item.id} />
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        table_columns: state.lang.langData.search_page.table_columns
    }
}

export default connect(mapStateToProps)(ProductList);
