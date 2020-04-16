import React, {Component} from 'react';


export default class Header extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                            <nav className="nav-menu mobile-menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="./about.html">About</a></li>
                                    <li><a href="./services.html">Services</a></li>
                                    <li><a href="./pricing.html">Pricing</a></li>
                                    <li><a href="./portfolio.html">Portfolio</a></li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./gallery.html">Gallery</a></li>
                                            <li><a href="./portfolio-details.html">Portfolio Details</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="top-search search-switch">
                                <i className="fa fa-search" />
                            </div>
                            <div id="mobile-menu-wrap">
                                <div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a>
                                    <nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
                                        <ul>
                                            <li className="active"><a href="./index.html" role="menuitem">Home</a></li>
                                            <li><a href="./about.html" role="menuitem">About</a></li>
                                            <li><a href="./services.html" role="menuitem">Services</a></li>
                                            <li><a href="./pricing.html" role="menuitem">Pricing</a></li>
                                            <li><a href="./portfolio.html" role="menuitem">Portfolio</a></li>
                                            <li><a href="./blog.html" role="menuitem">Blog</a></li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: 'none'}} /><a href="#">Pages</a>
                                                <span className="slicknav_arrow">►</span>
                                                <ul className="dropdown slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                                                    <li><a href="./gallery.html" role="menuitem" tabIndex={-1}>Gallery</a></li>
                                                    <li><a href="./portfolio-details.html" role="menuitem" tabIndex={-1}>Portfolio Details</a></li>
                                                    <li><a href="./blog-details.html" role="menuitem" tabIndex={-1}>Blog
                                                        Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="./contact.html" role="menuitem">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}