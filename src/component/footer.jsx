import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (

            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="#">
                                        <img src="img/f-logo.png" alt=""/>
                                    </a>
                                </div>
                                <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore
                                    et dolore magna aliqua.</p>
                                <div className="fa-social">
                                    <a href="#"><i className="fa fa-facebook"/></a>
                                    <a href="#"><i className="fa fa-twitter"/></a>
                                    <a href="#"><i className="fa fa-youtube-play"/></a>
                                    <a href="#"><i className="fa fa-instagram"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="fs-widget">
                                <h5>Instagram</h5>
                                <div className="fw-instagram">
                                    <img src="img/instagram/insta-1.jpg" alt=""/>
                                    <img src="img/instagram/insta-2.jpg" alt=""/>
                                    <img src="img/instagram/insta-3.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="fs-widget">
                                <h5>Quick links</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="fs-widget">
                                <h5>Subscribe</h5>
                                <p>Imolor amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div className="fw-subscribe">
                                    <form action="#">
                                        <input type="text" placeholder="Email"/>
                                        <button type="submit"><i className="fa fa-send"/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="copyright-text">
                                <p>
                                    Copyright ©2020 All rights reserved | This template is made with <i
                                    className="fa fa-heart" aria-hidden="true"/> by <a href="https://colorlib.com"
                                                                                       target="_blank">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
