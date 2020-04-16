import React, {Component} from 'react';

export default class Portfolio extends Component {
    render() {
        return (

            <section className="portfolio-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Our latest works</h2>
                            </div>
                            <div className="filter-controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".fashion">Fashion</li>
                                    <li data-filter=".lifestyle">Lifestyle</li>
                                    <li data-filter=".natural">Natural</li>
                                    <li data-filter=".wedding">Wedding</li>
                                    <li data-filter=".videos">Videos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="portfolio-filter" style={{position: 'relative', height: '1520px'}}>
                                <div className="pf-item set-bg fashion" data-setbg="img/portfolio/pf-1.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-1.jpg")',
                                    position: 'absolute',
                                    left: '0%',
                                    top: '0px'
                                }}>
                                    <a href="img/portfolio/pf-1.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item large-width large-height set-bg lifestyle"
                                     data-setbg="img/portfolio/pf-2.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-2.jpg")',
                                    position: 'absolute',
                                    left: '20%',
                                    top: '0px'
                                }}>
                                    <a href="img/portfolio/pf-2.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item large-width set-bg natural" data-setbg="img/portfolio/pf-3.jpg"
                                     style={{
                                         backgroundImage: 'url("img/portfolio/pf-3.jpg")',
                                         position: 'absolute',
                                         left: '60%',
                                         top: '0px'
                                     }}>
                                    <a href="img/portfolio/pf-3.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item large-height set-bg wedding" data-setbg="img/portfolio/pf-4.jpg"
                                     style={{
                                         backgroundImage: 'url("img/portfolio/pf-4.jpg")',
                                         position: 'absolute',
                                         left: '0%',
                                         top: '380px'
                                     }}>
                                    <a href="img/portfolio/pf-4.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item set-bg lifestyle" data-setbg="img/portfolio/pf-7.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-7.jpg")',
                                    position: 'absolute',
                                    left: '20%',
                                    top: '760px'
                                }}>
                                    <a href="img/portfolio/pf-7.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item set-bg natural" data-setbg="img/portfolio/pf-8.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-8.jpg")',
                                    position: 'absolute',
                                    left: '40%',
                                    top: '760px'
                                }}>
                                    <a href="img/portfolio/pf-8.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item set-bg videos" data-setbg="img/portfolio/pf-5.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-5.jpg")',
                                    position: 'absolute',
                                    left: '60%',
                                    top: '380px'
                                }}>
                                    <a href="img/portfolio/pf-5.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item set-bg fashion" data-setbg="img/portfolio/pf-6.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-6.jpg")',
                                    position: 'absolute',
                                    left: '80%',
                                    top: '380px'
                                }}>
                                    <a href="img/portfolio/pf-6.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item large-width set-bg videos" data-setbg="img/portfolio/pf-10.jpg"
                                     style={{
                                         backgroundImage: 'url("img/portfolio/pf-10.jpg")',
                                         position: 'absolute',
                                         left: '0%',
                                         top: '1140px'
                                     }}>
                                    <a href="img/portfolio/pf-10.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item set-bg fashion" data-setbg="img/portfolio/pf-11.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-11.jpg")',
                                    position: 'absolute',
                                    left: '40%',
                                    top: '1140px'
                                }}>
                                    <a href="img/portfolio/pf-11.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                                <div className="pf-item large-width large-height set-bg wedding"
                                     data-setbg="img/portfolio/pf-9.jpg" style={{
                                    backgroundImage: 'url("img/portfolio/pf-9.jpg")',
                                    position: 'absolute',
                                    left: '60%',
                                    top: '760px'
                                }}>
                                    <a href="img/portfolio/pf-9.jpg" className="pf-icon image-popup"><span
                                        className="icon_plus"/></a>
                                    <div className="pf-text">
                                        <h4>COLORS SPEAK</h4>
                                        <span>Fashion</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="load-more-btn">
                    <a href="#">Load More</a>
                </div>
            </section>
        );
    }
}
