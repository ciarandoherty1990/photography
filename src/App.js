import React, {Component} from 'react';
import './App.css';
import Header from "./component/header";
import Hero from "./component/hero";
import Services from "./component/services";
import Categories from "./component/categories";
import Portfolio from "./component/portflio";
import Footer from "./component/footer";


class App extends Component {
    render() {
        return (
            <div id="preloader">
                <Header></Header>
                <Hero></Hero>
                <Services></Services>
                <Categories></Categories>
                <Portfolio></Portfolio>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
