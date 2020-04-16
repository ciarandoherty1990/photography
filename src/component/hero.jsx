import React, {Component} from 'react';

export default class Hero extends Component {
    render() {
        return (

            <section className="hero-section">
                <div className="hs-slider owl-carousel owl-loaded owl-drag owl-grab">
                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{
                            transform: 'translate3d(-4983px, 0px, 0px)',
                            transition: 'all 0s ease 0s',
                            width: '8640px'
                        }}>
                            <div className="owl-item cloned" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-1.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-2.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-1.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item animated owl-animated-in fadeIn active" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-2.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-1.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-1.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-item cloned" style={{width: '1440px'}}>
                                <div className="hs-item set-bg" data-setbg="img/hero/hero-2.jpg"
                                     style={{backgroundImage: 'url("img/hero/hero-2.jpg")'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hs-text">
                                                    <h2>Photography Studio</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et<br/> dolore magna aliqua. Quis ipsum
                                                        suspendisse ultrices
                                                        gravida accumsan lacus vel facilisis.</p>
                                                    <a href="#" className="primary-btn">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev"><span
                            className="arrow_carrot-left"/></button>
                        <button type="button" role="presentation" className="owl-next"><span
                            className="arrow_carrot-right"/></button>
                    </div>
                    <div className="owl-dots disabled"/>
                </div>
            </section>
        );
    }
}