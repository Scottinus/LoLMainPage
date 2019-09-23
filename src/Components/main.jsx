import React, { Component } from 'react'
import Introduction from './Introduction';
import CarChamp from './Carousel';
import Concept from './Concept';
import Spotlight from './Spotlight';
import EndPage from './EndPage';
import Footer from './Footer';


export default class Main extends Component {
    render() {
        return (
            <>
            <div className="contaner-fluid big">
                <Spotlight/>
           <Introduction/>
           <div className="carousel-container">
           <CarChamp/>
           </div>
           <Concept/>
           <EndPage/>
           <Footer/>
           <button className="cookie-btn fixed-bottom mb-2">
                <img className="pb-1 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/VisualEditor_-_Icon_-_Advanced.svg/1024px-VisualEditor_-_Icon_-_Advanced.svg.png" width="18px"></img>
               COOKIE PREFERENCES</button>
                </div>
                
            </>
        )
    }
}
