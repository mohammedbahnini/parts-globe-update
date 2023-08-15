import React, { Component } from "react";
import Slider from "react-slick";
import NextArrow from "../../../carousel/NextArrow";
import PrevArrow from "../../../carousel/PrevArrow";
import Lightbox from "react-image-lightbox";

class ThumbnailDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryCarousel: null,
      variantCarousel: null,
      photoIndex: 0,
      isOpen: false,
    };
  }

  handleOpenLightbox = (e, imageIndex) => {
    e.preventDefault();
    this.setState({ photoIndex: imageIndex, isOpen: true });
  };

  componentDidMount() {
    this.setState({
      galleryCarousel: this.slider1,
      variantCarousel: this.slider2,
    });
  }

  render() {
    const { product } = this.props;
    const { photoIndex, isOpen } = this.state;
    const productImages = product.variants.map((item) => item.thumbnail);

    const gallerySetting = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const sliderSettings = {
      dots: false,
      slidesToShow: 1,
      infinite: false,
      arrows: false,
      swipeToSlide: false,
      slidesToShow: productImages.length >= 4 ? 4 : productImages.length,
    };

    return (
      <div
        className='ps-product__thumbnail'
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <figure>
          <div className='ps-wrapper'>
            <Slider
              {...gallerySetting}
              ref={(slider) => (this.slider1 = slider)}
              asNavFor={this.state.variantCarousel}
              className='ps-product__gallery ps-carousel inside'
            >
              {product.variants.map((item) => {
                return (
                  <div className='item' key={item.thumbnail}>
                    <a href='#' onClick={(e) => this.handleOpenLightbox(e, 0)}>
                      <img
                        src={item.thumbnail}
                        alt=''
                        style={{ margin: "0 auto" }}
                      />
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </figure>

        <Slider
          {...sliderSettings}
          className='product-variants'
          ref={(slider) => (this.slider2 = slider)}
          asNavFor={this.state.galleryCarousel}
          style={{ width: "100%" }}
        >
          {product.variants.map((img) => {
            return (
              <div className='item' key={product.thumbnail}>
                <img src={img.thumbnail} />
              </div>
            );
          })}

          <div className='item' key={product.thumbnail}></div>
        </Slider>

        <div className='ps-variants-controls'>
          <button
            className='ps-btn ps-btn-sm'
            onClick={() => this.slider2.slickPrev()}
          >
             <i className="icon-chevron-left"></i>
          </button>
          <button
            className='ps-btn ps-btn-sm'
            onClick={() => this.slider2.slickNext()}
          >
             <i className="icon-chevron-right"></i>
          </button>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={productImages[photoIndex]}
            nextSrc={productImages[(photoIndex + 1) % productImages.length]}
            prevSrc={
              productImages[
                (photoIndex + productImages.length - 1) % productImages.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + productImages.length - 1) %
                  productImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % productImages.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default ThumbnailDefault;
