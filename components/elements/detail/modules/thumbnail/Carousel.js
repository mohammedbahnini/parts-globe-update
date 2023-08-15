import React from 'react';
import dynamic from 'next/dynamic';
import Lightbox from 'react-image-lightbox';


const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.mainThumbnail = React.createRef();
        this.carousel = null;
        this.state = {
            lightBoxIsOpen: false,
            lightBoxPhotoIndex: 0
        }
    }
    next = () => {
        this.carousel.next();
    }
    previous = () => {
        this.carousel.prev();
    }
    openLightBox(e) {
        e.preventDefault();
        this.setState({
            lightBoxIsOpen: true
        })
    }
    render() {
        const { product } = this.props;
        const self = this;
        const carouselOptions = {
            items: 4,
            margin: 15,
            onInitialized: function () {
                self.carousel = this;
            }
        }

        const productPhotos = this.props.product.variants.map(item => item.thumbnail);
        const { lightBoxPhotoIndex } = this.state;

        return (
            <div className="ps-product__thumbnail" style={{ display: 'flex', flexDirection: 'column' }}>
                <figure >
                    <div className="ps-wrapper">
                        <div className="item" key={product.thumbnail}>
                            <a href="#" onClick={e => this.openLightBox(e)}>
                                <img src={product.thumbnail} alt="" style={{ margin: '0 auto' }} ref={this.mainThumbnail}
                                />
                            </a>
                        </div>
                    </div>
                </figure>

                <OwlCarousel {...carouselOptions} >
                    {productPhotos.map(item => {
                        return (
                            <img
                                src={item}
                                onClick={() => this.mainThumbnail.current.src = item}
                                key={item}
                            />
                        )
                    })}
                </OwlCarousel>

                <div className='thumbnail-controls-btn' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20' }}>
                    <button className='ps-btn' style={{ padding: '10px 40px' }} onClick={this.previous}>
                        <i className="icon-chevron-left"></i>
                    </button>

                    <button className='ps-btn' style={{ padding: '10px 40px' }} onClick={this.next}>
                        <i className="icon-chevron-right"></i>
                    </button>
                </div>
                {
                    this.state.lightBoxIsOpen &&
                    (
                        <Lightbox
                            mainSrc={productPhotos[lightBoxPhotoIndex]}
                            nextSrc={
                                productPhotos[
                                (lightBoxPhotoIndex + 1) % productPhotos.length
                                ]
                            }
                            prevSrc={
                                productPhotos[
                                (lightBoxPhotoIndex + productPhotos.length - 1) %
                                productPhotos.length
                                ]
                            }
                            onCloseRequest={() => this.setState({ lightBoxIsOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    lightBoxPhotoIndex:
                                        (lightBoxPhotoIndex + productPhotos.length - 1) %
                                        productPhotos.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    lightBoxPhotoIndex:
                                        (lightBoxPhotoIndex + 1) % productPhotos.length,
                                })
                            }
                        />

                    )
                }


            </div>
        )
    }

}
