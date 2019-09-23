import React, { Component } from 'react';

import logo from "../Data/lol-logo.png";

export default class Spotlight extends Component {
    render() {
        return (
            <div className="spotlight">
    <video width="100%" height="auto" loop muted="" autoPlay>
    <source className="" src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/it_IT/fc1312b6f05f6bbf465d387efbc5860767f01f30/assets/vid/hero-video.mp4" 
    type="video/mp4"/>
    </video>

    <div className="logo-img">
               <img src={logo}/>
               </div>
               <div className="text-center tagline">
                   <h2>JOIN LEAGUE OF LEGENDS</h2>
                   <h1>BECOME A LEGEND</h1>
                   <div className="mt-4">
                   <a href="http://signup.euw.leagueoflegends.com/it" className="cust-btn">PLAY FOR FREE</a>

                    </div>
                    </div>

            </div>
        )
    }
}