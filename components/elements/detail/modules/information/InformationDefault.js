import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Rating from "../../../Rating";
import { addItem } from "../../../../../store/cart/action";
import { addItemToCompare } from "../../../../../store/compare/action";
import { addItemToWishlist } from "../../../../../store/wishlist/action";
import { notification } from "antd";

class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            product: this.props.product
        };
    }

    handleAddItemToCart = (e, stock) => {
        e.preventDefault();
        const {
            id,
            brand,
            partNumber,
            title,
            thumbnail,
        } = this.state.product;

        const product = {
            id,
            brand,
            partNumber,
            title,
            thumbnail,
            quantity: stock.quantity,
            warehouse: stock.id,
            price: stock.price
        };
        this.props.dispatch(addItem(product));
    };

    handleIncrease = (e, stock) => {
        const product = this.state.product;

        if (product.stocks.length > 0) {
            product.stocks.forEach(item => {
                if (item.id === stock.id) {
                    if (stock.quantity + 1 > item.count) {
                        notification['warning']({
                            message: 'Warning',
                            description: 'You reach the limit of the warehouse\'s quantity',
                            duration: 5
                        })
                    }
                    else item.quantity++;

                }
            });
        }
        this.setState({ product })
    };


    handleDecrease = (e, stock) => {
        const product = this.state.product;

        if (product.stocks.length > 0) 
        {
            product.stocks.forEach(item => {
                if (item.id === stock.id) {
                    if (stock.quantity - 1 >= 1)
                        item.quantity--;

                }
            });
        } 
         else item.quantity++;
        
        this.setState({ product })
    }




  render() {
    const { product, lang } = this.props;

    return (
      <div className='ps-product__info'>
        <h4 style={{ display: "inline-block" }}>{lang.brand_label}</h4>
        <h5 style={{ display: "inline-block" }}>&nbsp;{product.brand} </h5>
        <br />
        <h4 style={{ display: "inline-block" }}>{lang.part_number_label}</h4>
        <h5 style={{ display: "inline-block" }}>&nbsp;{product.partNumber}</h5>

        <div className='ps-product__meta'></div>

        <div className='ps-product__desc'>
          <ul className='ps-list--dot'>
            <li>{product.title}</li>
          </ul>
        </div>
        <div className='ps-product__shopping'>
          {product.stocks.length === 0 ? (
            <p>{lang.empty_stocks}</p>
          ) : (
            <div style={{ width: "100%" }} className='single-detail-wrapper'>
              <h4>{lang.stocks_title}</h4>
              <table className='product-list single-detail'>
                <thead>
                  <tr>
                    <th className='text-center'>{lang.warehouse_label}</th>
                    <th className='text-center'>{lang.quantity_label}</th>
                    <th className='text-center'>{lang.price_label}</th>
                    <td></td>
                  </tr>
                </thead>

                <tbody>
                  {product.stocks.map((stock) => {
                    return (
                      <tr key={stock.id}>
                        <td className='text-center'>{stock.id}</td>
                        <td className='text-center'>
                          <div className='product-quantity-control'>
                            <button
                              className='btn-quantity'
                              onClick={(e) => this.handleDecrease(e, stock)}
                            >
                              -
                            </button>
                            <span className='product-quantity'>
                              {stock.quantity}
                            </span>
                            <button
                              className='btn-quantity'
                              onClick={(e) => this.handleIncrease(e, stock)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className='text-center'>{stock.price}</td>
                        <td>
                          <button
                            className='btn_add_to_cart'
                            onClick={(e) => this.handleAddItemToCart(e, stock)}
                          >
                            {lang.add_to_cart_label}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        lang: state.lang.langData.page_single
    }
};

export default connect(mapStateToProps)(InformationDefault);
