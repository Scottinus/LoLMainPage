import React, {Component} from "react";

export default class Footer extends Component{

    render(){
        return(
                <>
                <div className="footer-container bg-footer">
                    <div className="row mt-4">
                        <div className="col-12 footer text-center">
                            <a href="" target="_blank" >
                                <img className="mb-3" src="https://lolstatic-a.akamaihd.net/riotbar/prod/1.6.489/images/footer/riotgames-logo/white-s.png"/>
                                </a>
                            <p>© 2019 Riot Games Inc. Tutti i diritti riservati. 
                                Riot games, League of Legends e PvP.net sono marchi o marchi 
                                registrati di Riot Games, Inc.
                            </p>
                            <span className="ml-4">
                                <a href="">
                                Politiche sulla privacy
                                </a>
                            </span>
                            <span>
                            <a href="">
                                Politiche sulla privacy
                                </a>
                            </span>
                            <span>
                            <a href="">
                                Politiche sulla privacy
                                </a>
                            </span>
                            <div className="mt-3 mb-4">
                                <a href="" className="pr-2">
                                    <img src="https://lolstatic-a.akamaihd.net/riotbar/prod/1.6.489/images/footer/game-rating-logos/pegi.png"></img>
                                </a>
                                <a href="" className="pl-2">
                                    <img src="https://lolstatic-a.akamaihd.net/riotbar/prod/1.6.489/images/footer/game-rating-logos/usk-12.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </>

        );
    }
}