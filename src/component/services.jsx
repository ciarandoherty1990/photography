import React, {Component} from 'react';

export default class Services extends Component {
    render() {
        return (

            <section className="services-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="services-item">
                                <img src="img/services/service-1.jpg" alt=""/>
                                <h3>Shooting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="services-item">
                                <img src="img/services/service-2.jpg" alt=""/>
                                <h3>Videos</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="services-item">
                                <img src="img/services/service-3.jpg" alt=""/>
                                <h3>Editing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}