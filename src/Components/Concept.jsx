import React, {Component} from "react"


export default class Concept extends Component{

    render()
        {
            return(
                    <div className="concept-container">
                        <div className="row">
                            <div className="col-6 gameplay1">
                                <div className="bordered text-start">
                                </div>
                                <div className="border-text">
                                <h3>LADDERS THE RANKINGS</h3>
                                <p>Metti alla prova le tue abilità contro i giocatori di tutta Europa e scala la classifica competitiva.</p>
                                </div>
                            </div>
                            <div className="col-6 gameplay2">
                            <div className="bordered">
                                </div>
                                <div className="border-text">
                                <h3>IT IS FREE TO PLAY, AND YOU DON'T HAVE TO PAY TO WIN</h3>
                                <p>Questo è un gioco gratuito, e non si paga per vincere. Puoi guadagnare campioni e premi direttamente sul campo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    
}